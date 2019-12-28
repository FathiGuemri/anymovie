const { mongoose } = require('../db/mongoos'),
    { Serie, Episode } = require('../db/models/series.models'),
    ObjectId = require('mongoose').Types.ObjectId;

// get Document Serie bay ID
exports.getSerieById = (req, res) => {
    Serie.findOne({ _id: req.params._id }).populate({
        path: 'allepisodes',
        model: 'episode',
        options: { sort: { index: 1 } }
    }).then(serie => {
        res.json(serie)
    }).catch(err => {
        res.status(401).json(err)
    })
}

// get all docmuent series
exports.getAllseries = (req, res) => {
    Serie.find({}).populate({
        path: 'allepisodes',
        model: 'episode',
        options: { sort: { index: 1 } }
    }).sort({ title: -1 }).then(series => {
        res.json(series)
    })
}

// get all docmuent and fullter by category  series
exports.getSerieByCategory = (req, res) => {
    Serie.find({ category: req.params.category }).populate({
        path: 'allepisodes',
        model: 'episode',
        options: { sort: { index: 1 } }
    }).then(serie => {
        res.json(serie)
    })
}



exports.getAfterSerie = (req, res) => {
    Serie.find({}).populate({
        path: 'allepisodes',
        model: 'episode',
        options: { sort: { index: 1 } }
    }).then(serie => {

        res.json(serie[serie.length - 1])
    })
}


// // create new document serie



exports.createSerie = (req, res) => {
    let data = req.body
    let b64encoded = req.file.buffer.toString('base64');
    data.imageUrl = "data:" +req.file.mimetype + ";base64," + b64encoded;
    data.allepisodes = eval(data.allepisodes)
    let serie = new Serie(data)

    serie.save().then(serie => {
        res.status(200).json({ msg: 'تم اضافت الفيلم بنجاح', serie })
    }).catch(err => {
        console.log(err)
        res.status(401).json({ err })
    })
    console.log(data)
}

exports.editeSerisById = (req, res) => {
    let data = req.body;

    let b64encoded = req.file.buffer.toString('base64');
    data.imageUrl = "data:" +req.file.mimetype + ";base64," + b64encoded;



    Serie.updateOne({ _id: req.params._id }, data).then((eiditedSrise) => {
        res.status(200).json({ msg: 'تم تعديل الفيلم بنجاح', eiditedSrise })
    }).catch(err => res.status(401).json(err))


}

exports.deleteSeries = (req, res) => {
    Serie.deleteOne({ _id: req.params._id }).then(deletedSerie => {
        res.status(200).json({ msg: 'تم حذف الفيلم بنجاح' })
    }).catch(err => res.status(401).json(err))
}


exports.editEpisode = (req, res) => {
    Episode.updateOne({ _id: req.params.id, serieId: req.params.serieId }, {
        index: req.body.index,
        url: req.body.url,
        timeEpisode: req.body.timeEpisode
    }).then(s => {
        res.json({ success: true })
    }).catch(e => res.json({ success: true, e }))
}

exports.addEpisode =  async (req, res) => {
    try {
        let serieId = req.params.serieId;
        let episode = new Episode({
            serieId,
            index: req.body.index,
            url: req.body.url,
            timeEpisode: req.body.timeEpisode
        })
        let episodeDoc = await episode.save()
        await Serie.updateOne({_id: serieId}, {
            $push: {
                allepisodes: [new ObjectId(episodeDoc._id)]
          }
  }).then(() => res.json({success: true}))

        return
    } catch (err){
        res.json({success: false, err})
    }





}
exports.deleteEpisode = (req, res) => {
    Episode.deleteOne({ _id: req.params.id }).then(() => {
        Serie.updateOne({_id : req.params.serieId}, {
            $pull: {
                allepisodes: [ObjectId(req.params.id)]
            }
        })
        res.json({ success: true })
    }).catch(e => res.json({ success: false, e }))
}

exports.getEpisodes = (req, res) => {
    Episode.find({}).then(episode => {
        res.json(episode)
    })
}
exports.getEpisodesById = (req, res) => {
    Episode.findOne({ _id: req.params.ep_Id }).then(episode => {
        res.json(episode)
    })
}







