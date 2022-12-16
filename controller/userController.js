const userHelper = require('../helper/userHelper')

module.exports = {
    signup: (req, res, next) => {
        userHelper.doSignup(req.body).then((response) => {
            res.json({ response })
        })
    },
    login: (req, res, next) => {
        userHelper.dologin(req.body).then((response) => {

            if (response.token) {
                res.json(response)
            } else {
                res.json({ msg: 'invalid credential' })
            }

        }).catch(err => res.json(err))
    },
    application: (req, res, next) => {
        req.body.user = req.userId
        console.log(req.body, "body")
        userHelper.saveApplication(req.body).then((response) => {
            console.log('success')

            res.json({ response })
        }).catch(err => res.json(err))



    },
    applicationStatus: (req, res, next) => {

        userHelper.getappllicationStatus(req.userId).then(data => {
            
            res.json({ applicationData: data })
        }).catch(err => res.json(err))

    }
}

