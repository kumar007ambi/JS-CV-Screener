console.log('CV Screener');
//Data is an array of Objects which contains information about candidates
const data = [
    {
        name: 'Rohan Das',
        age: 20,
        city: 'Kolkata',
        languages: 'python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/men/79.jpg'
    },
    {
        name: 'Rahul Roy',
        age: 25,
        city: 'Pune',
        languages: 'JavaScript',
        framework: 'ReactJs',
        image: 'https://randomuser.me/api/portraits/men/45.jpg'
    },
    {
        name: 'Sam Paul',
        age: 22,
        city: 'Hyderbad',
        languages: 'Java',
        framework: 'Spring',
        image: 'https://randomuser.me/api/portraits/men/50.jpg'
    },
    {
        name: 'Simron Das',
        age: 24,
        city: 'Chnennai',
        languages: 'JavaScript',
        framework: 'VueJS',
        image: 'https://randomuser.me/api/portraits/women/55.jpg'
    },
    {
        name: 'Simran Kour',
        age: 28,
        city: 'Delhi',
        languages: 'Java',
        framework: 'Spring',
        image: 'https://randomuser.me/api/portraits/women/60.jpg'
    },
    {
        name: 'Misti Singh',
        age: 23,
        city: 'Mumbai',
        languages: 'C++',
        framework: 'Ruby',
        image: 'https://randomuser.me/api/portraits/women/50.jpg'
    }
]


//CV Iterator
function cvIterator(profiles) {
    let nextIndex = 0;
    return {
        next: function () {
            return nextIndex < profiles.length ? { value: profiles[nextIndex++], done: false } : { done: true }
        }
    };
}

//Instance for candiate data
const candidates = cvIterator(data);
//call for initailly fetch the data
nextCV();
//Button Listener
const next = document.getElementById('next');
next.addEventListener('click', nextCV);

function nextCV() {
    const currentCandidate = candidates.next().value;
    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if (currentCandidate != undefined) {
        image.innerHTML = `<img src="${currentCandidate.image}">`;
        profile.innerHTML = `<ul class="list-group">
                            <li class="list-group-item">Name : ${currentCandidate.name}</li>
                            <li class="list-group-item">${currentCandidate.age} years old</li>
                            <li class="list-group-item">Lives in ${currentCandidate.city}</li>
                            <li class="list-group-item">Primarly works on ${currentCandidate.languages}</li>
                            <li class="list-group-item">with ${currentCandidate.framework} framework</li>
                        </ul>`;
    } else {
        alert("End of Applications");
        window.location.reload();

    }
}