const container = document.getElementById("eventsContainer");
const searchInput = document.getElementById("searchInput");
let allEvents = [];

function displayEvents(eventList) {
  container.innerHTML = "";
  eventList.forEach(event => {
    container.innerHTML += `
      <div class="col-md-4 mb-4">
        <div class="card h-100 shadow-sm">
          <div class="card-body">
            <h5 class="card-title">${event.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${event.date} at ${event.time}</h6>
            <p class="card-text"><strong>Location:</strong> ${event.location}</p>
            <p class="card-text">${event.description}</p>
            <a href="#" class="btn btn-primary">Register</a>
          </div>
        </div>
      </div>
    `;
  });
}

fetch('events.json')
  .then(response => response.json())
  .then(data => {
    allEvents = data;
    displayEvents(allEvents);
  });

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  const filtered = allEvents.filter(e => e.name.toLowerCase().includes(query));
  displayEvents(filtered);
});
