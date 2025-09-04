// Portfolio projects (easy to add more here)
const projects = [
  {
    title: "Daily Rewards",
    type: "video",
    src: "videos/DailyRewards.mp4",
    description: "A custom reward system where players can claim free rewards daily. animated UI with smooth tweens, progression tracking, and one-at-a-time claiming to keep players engaged and returning every day."
  },
  {
    title: "Minigames Framework",
    type: "video",
    src: "videos/MinigamesSystem.mp4",
    description: "Modular mini-game system for rounds, teams, and rewards. | Color Party Minigame: Players stand on the correct color as instructed to survive and win."
  },
 {
    title: "Floor is Lava",
    type: "video",
    src: "videos/FloorIsLava.mp4",
    description: "A fast-paced game mode where players avoid rising lava with dynamic obstacles."
  },
 {
    title: "Roll System",
    type: "video",
    src: "videos/RollSystem.mp4",
    description: "Players roll for random rewards, store and equip auras, with UI."
  },
 {
    title: "Loading Screen",
    type: "video",
    src: "videos/Loading_Screen.mp4",
    description: "Preloads assets with animated UI for a smooth player experience."
  },
 {
    title: "Increment System",
    type: "video",
    src: "videos/Increment_System.mp4",
    description: "Boosts money spawn, multiplier, WalkSpeed, and rebirth progression."
  },
 {
    title: "UI Interaction & Animation",
    type: "video",
    src: "videos/UI_Interaction.mp4",
    description: "Smooth and dynamic UI effects with interactive elements."
  },
 {
    title: "Forever Pack",
    type: "video",
    src: "videos/ForeverPack.mp4",
    description: "Timed reward system with alternating free and Robux rewards, animated UI, and progression tracking."
  },
];

// Render projects dynamically
const projectGrid = document.querySelector(".project-grid");
projects.forEach(project => {
    const card = document.createElement("div");
    card.classList.add("project-card");
    
    const h3 = document.createElement("h3");
    h3.textContent = project.title;
    card.appendChild(h3);
    
    if (project.type === "video") {
        const video = document.createElement("video");
        video.controls = true;
        video.muted = true;
        const source = document.createElement("source");
        source.src = project.src;
        source.type = "video/mp4";
        video.appendChild(source);
        card.appendChild(video);
    } else if (project.type === "image") {
        const img = document.createElement("img");
        img.src = project.src;
        img.alt = project.title;
        card.appendChild(img);
    }
    
    const p = document.createElement("p");
    p.textContent = project.description;
    card.appendChild(p);

    projectGrid.appendChild(card);
});

// Dark Mode Toggle
const toggleBtn = document.getElementById("darkModeToggle");

// Load saved preference
if (localStorage.getItem("darkMode") === "enabled") {
  document.body.classList.add("dark-mode");
  toggleBtn.textContent = "☀️ Light Mode";
}

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    toggleBtn.textContent = "☀️ Light Mode";
    localStorage.setItem("darkMode", "enabled");
  } else {
    toggleBtn.textContent = "🌙 Dark Mode";
    localStorage.setItem("darkMode", "disabled");
  }
});
