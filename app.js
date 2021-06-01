// Data is an array of objects which contains information about the candidates

const data = [
    {
        name: 'Salman Haider',
        age: 25,
        city: 'Jaipur',
        language: 'Python',
        framework: 'Django',
        img: 'https://randomuser.me/api/portraits/men/4.jpg'
    },
    {
        name: 'Shubham Sharma',
        age: 25,
        city: 'Banglore',
        language: 'JavaScript',
        framework: 'Angular',
        img: 'https://randomuser.me/api/portraits/men/14.jpg'
    },
    {
        name: 'Hasnen Ansari',
        age: 26,
        city: 'Delhi',
        language: 'JavaScript',
        framework: 'React',
        img: 'https://randomuser.me/api/portraits/men/24.jpg'
    },
    {
        name: 'Arshad Qureshi',
        age: 25,
        city: 'Jaipur',
        language: 'Java',
        framework: 'Spring',
        img: 'https://randomuser.me/api/portraits/men/74.jpg'
    },
    {
        name: 'Aquib Ansari',
        age: 25,
        city: 'Delhi',
        language: 'Java',
        framework: 'Spring',
        img: 'https://randomuser.me/api/portraits/men/84.jpg'
    },
    {
        name: 'Shubham Sain',
        age: 24,
        city: 'Jaipur',
        language: 'JavaScript',
        framework: 'React',
        img: 'https://randomuser.me/api/portraits/men/54.jpg'
    },

]

// CV Iterator
function cvIterator(profiles) {
    let nextIndex = 0;
    return {
        next: function () {
            return nextIndex < profiles.length ? { value: profiles[nextIndex++], done: false } : { done: true };
        }
    };
}

// Get all data from the database an store one by one in candidates variable
const candidates = cvIterator(data);

// First time call function before click on next button show first data
nextCV();

// Button listener for next button 
const next = document.getElementById('next');
next.addEventListener('click', nextCV);

function nextCV() {
    const currentCandidate = candidates.next().value;

    let image = document.getElementById('image');
    let profile = document.getElementById('profile');

    if(currentCandidate != undefined){
    image.innerHTML = `<img src='${currentCandidate.img}'>`;
    profile.innerHTML = `<ul class="list-group">
    <li class="list-group-item">Name: ${currentCandidate.name}</li>
    <li class="list-group-item">${currentCandidate.age} years old</li>
    <li class="list-group-item">Lives in ${currentCandidate.city}</li>
    <li class="list-group-item">Primarily works on ${currentCandidate.language}</li>
    <li class="list-group-item">Uses ${currentCandidate.framework} framework</li>
  </ul>`;
    }
    else{
        alert('End of candidate applications');
        window.location.reload();
    }
}