let allRSOList = null

const loadRSOs = () => {
    allRSOList = new rsoDashboard(
        (eventSectionElement = document.querySelector('#rso-section'))
    )

    const url = 'http://localhost:3000/api/rsos/getRSOs'

    fetch(url, { method: 'GET' })
        .then((response) => response.json())
        .then((data) => {
            for (let i = 0; i < data.rsos.length; i++) {
                allRSOList.addRSO(data.rsos[i].name, data.rsos[i].description)
            }
        })
        .catch((error) => {
            console.error('Error:', error)
        })
}

const loadCurrentRSOs = () => {
    let rsoList = new rsoDashboard(
        (eventSectionElement = document.querySelector('#current-rso-section'))
    )

    const url = 'http://localhost:3000/api/rsos/getCurrentRSOs'
    const id = localStorage.getItem('id')

    const postObj = {
        id: id
    }

    const post = JSON.stringify(postObj)

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: post
    })
        .then((response) => response.json())
        .then((data) => {
            for (let i = 0; i < data.rsos.length; i++) {
                rsoList.addCurrentRSO(
                    data.rsos[i].name,
                    data.rsos[i].description
                )
            }
        })
        .catch((error) => {
            console.error('Error:', error)
        })
}

loadRSOs()
loadCurrentRSOs()

const joinRSO = () => {
    console.log(allRSOList)
}

const createEvent = () => {
    let name = document.getElementById('eventName').value
    let description = document.getElementById('eventDescription').value
    let location = document.getElementById('eventLocation').value
    let date = document.getElementById('eventTime').value
    let year = date.slice(0, 4)
    let month = date.slice(6, 7)
    let day = date.slice(9, 10)
    let time = date.slice(11, 16)

    const UniversityID = localStorage.getItem('UniversityID')

    let postObj = {
        UniversityID: UniversityID,
        name: name,
        description: description,
        location: location,
        year: year,
        month: month,
        day: day,
        time: time
    }

    let post = JSON.stringify(postObj)

    const url = 'http://localhost:3000/api/events/createPrivateEvent'

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: post
    })
        .then((response) => response.json())
        .catch((error) => {
            console.error('Error:', error)
        })
}

const addButtonEventListener = () => {
    let btn = document.getElementById('redirect-button')
    btn.addEventListener('click', (e) => {
        e.preventDefault()
        let isAdmin = localStorage.getItem('admin')
        if (isAdmin === true) {
            window.location.href = 'http://localhost:3000/adminDashboard'
        } else {
            window.location.href = 'http://localhost:3000/dashboard'
        }
    })

    let form2 = document.getElementById('eventForm')
    form2.addEventListener('submit', (e) => {
        e.preventDefault()
        createEvent()
    })
}

addButtonEventListener()

const addAffiliation = () => {
    console.log('hello')
}
