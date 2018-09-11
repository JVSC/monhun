var setnames = ["Alloy", "Alloy Alpha", "Alloy Beta", "Aloy Alpha", "Anja", "Anja Alpha", "Anja Beta", "Azure Starlord Alpha", "Baan", "Baan Alpha", "Baan Beta", "Barnos Alpha", "Barnos Beta", "Barroth", "Barroth Alpha", "Barroth Beta", "Bazel Alpha", "Bazel Beta", "Blossom", "Blossom Alpha", "Bone", "Bone Alpha", "Bone Beta", "Brigade", "Brigade Alpha", "Brigade Beta", "Butterfly", "Butterfly Alpha", "Butterfly Beta", "Chainmail", "Chainmail Alpha", "Chainmail Beta", "Commission Alpha", "Commission Beta", "Damascus Alpha", "Damascus Beta", "Dante Alpha", "Death Stench", "Death Stench Alpha", "Death Stench Beta", "Deviljho Alpha", "Deviljho Beta", "Diablos", "Diablos Alpha", "Diablos Beta", "Diablos Nero Alpha", "Diablos Nero Beta", "Diver", "Diver Alpha", "Dragonking Alpha", "Drachen Alpha", "Dodogama Alpha", "Dodogama Beta", "Dober Alpha", "Dober Beta", "Faux Felyne Alpha", "Gajau", "Gajau Alpha", "Gajau Beta", "Gastodon Alpha", "Gastodon Beta", "Girros", "Girros Alpha", "Girros Beta", "Guild Cross Alpha", "Guild Cross Beta", "High Metal", "High Metal Alpha", "High Metal Beta", "Hornetaur", "Hornetaur Alpha", "Hornetaur Beta", "Hunter's", "Hunter's Alpha", "Hunter's Beta", "Ingot", "Ingot Alpha", "Ingot Beta", "Jagras", "Jagras Alpha", "Jagras Beta", "Jyura", "Jyura Alpha", "Jyura Beta", "Kadachi", "Kadachi Alpha", "Kadachi Beta", "Kestodon", "Kestodon Alpha", "Kestodon Beta", "King Beetle", "King Beetle Alpha", "King Beetle Beta", "Kirin", "Kirin Alpha", "Kirin Beta", "Kirin Gamma", "Kulu", "Kulu Alpha", "Kulu Beta", "Kulve Taroth Alpha", "Kulve Taroth Beta", "Kushala Alpha", "Kushala Beta", "Kushala Gamma", "Lavasioth Alpha", "Lavasioth Beta", "Leather", "Leather Alpha", "Leather Beta", "Legiana", "Legiana Alpha", "Legiana Beta", "Lunastra Alpha", "Lunastra Beta", "Lumu", "Lumu Alpha", "Lumu Beta", "Mosswine Alpha", "Nergigante Alpha", "Nergigante Beta", "Odogaron", "Odogaron Alpha", "Odogaron Beta", "Origin", "Pukei", "Pukei Alpha", "Pukei Beta", "Rath Heart Alpha", "Rath Heart Beta", "Rath Soul Alpha", "Rath Soul Beta", "Rathalos", "Rathalos Alpha", "Rathalos Beta", "Rathian", "Rathian Alpha", "Rathian Beta", "Ryu's", "Ryu's Alpha", "Sakura Alpha", "Shamos", "Shamos Alpha", "Shamos Beta", "Strategist Alpha", "Teostra Alpha", "Teostra Beta", "Teostra Gamma", "Tzitzi", "Tzitzi Alpha", "Tzitzi Beta", "Uragaan Alpha", "Uragaan Beta", "Vaal Hazak Alpha", "Vaal Hazak Beta", "Vaal Hazak Gamma", "Vespoid", "Vespoid Alpha", "Vespoid Beta", "Xeno'jiiva Alpha", "Xeno'jiiva Beta", "Zorah Alpha", "Zorah Beta"]
const 	mongoose 	= require('mongoose');
const 	Schema 	= mongoose.Schema;
const 	Cors 	= require('cors')
const	express	= require('express'),
		app		= express(),
		port 	= process.env.PORT || 3000;


// DATABASE CONFIGURATIONS AND SCHEMA
mongoose.connect('mongodb://jotaka:skylane07@ds018308.mlab.com:18308/monhun', { useNewUrlParser: true });
var armorSchema = new Schema({
	rank: String,
	setName: String,
	rarity: Number,
	defense: Number,
	Fire:Number,
	Thunder: Number,
	Water: Number,
	Ice: Number,
	Dragon: Number,
	Slots: Number,
	pieces: [Schema.Types.Mixed]
})
var _Set = mongoose.model('Set', armorSchema) ;


// ROUTING CODE
app.use(Cors())
app.get('/armorset', function(req, res){
	_Set
		.find({})
		.then( data => res.json(data) )
		.catch( err => console.log(err) )
})

app.get('/', function(req, res){
	res.send('Welcome to my API :)')
})

app.listen(port)
