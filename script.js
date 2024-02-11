const arrImages = [
  {
    name: "ocean water",
    image:
      "https://images.unsplash.com/photo-1707382847351-6035cdc3f727?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "scenery",
    image:
      "https://plus.unsplash.com/premium_photo-1669218057916-7f80c191bd2e?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "beach",
    image:
      "https://images.unsplash.com/photo-1707076463996-e17fb5f8fa95?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "mountain",
    image:
      "https://images.unsplash.com/photo-1706636605309-fa3f7f964bde?q=80&w=985&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "flower",
    image:
      "https://images.unsplash.com/photo-1684162440652-107bf47ab89b?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "desert",
    image:
      "https://images.unsplash.com/photo-1705835254007-628c4d924e23?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "mountain snow",
    image:
      "https://images.unsplash.com/photo-1705900266175-1e8bed33afbd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Petals of roses",
    image:
      "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?q=80&w=3786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Animals of town",
    image:
      "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=2688&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "the crowd of city",
    image:
      "https://images.unsplash.com/photo-1517732306149-e8f829eb588a?q=80&w=3872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "fruits of planet",
    image:
      "https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?q=80&w=3764&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "orange peeled",
    image:
      "https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=3337&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "web design",
    image:
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "apple juice",
    image:
      "https://images.unsplash.com/photo-1576673442511-7e39b6545c87?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

function showImages() {
  const display = arrImages
    .map(
      (obj) => `
        <div class="box">
            <img class="cursor-pointer" src="${obj.image}" alt="image">
        </div>
    `
    )
    .join("");

  document.querySelector(".container").innerHTML = display;
}

const handleSearchFunctionality = () => {
  const input = document.querySelector("#searchinput");
  const searchdata = document.querySelector(".searchdata");

  input.addEventListener("focus", () => {
    document.querySelector(".overlay").style.display = "block";
  });

  input.addEventListener("blur", () => {
    document.querySelector(".overlay").style.display = "none";
  });

  input.addEventListener("input", () => {
    const filteredArray = arrImages.filter((obj) =>
      obj.name.toLowerCase().startsWith(input.value.toLowerCase())
    );

    let html = "";
    filteredArray.forEach((obj) => {
      html += `
                <div class="res flex px-8 py-3">
                    <i class="ri-search-line font-semibold mr-5"></i>
                    <h3 class="font-semibold">${obj.name}</h3>
                </div>
            `;
    });

    searchdata.style.display = "block";
    searchdata.innerHTML = html;

    const display = filteredArray
      .map(
        (obj) => `
    <div class="box">
    <img class="cursor-pointer" src="${obj.image}" alt="image">
    </div>
    `)
      .join("");

    document.querySelector(".container").innerHTML = display;

    searchdata.addEventListener("mouseleave", () => {
      searchdata.style.display = "none";
    });

    if (input.value === "") {
      document.querySelector(".container").innerHTML = ""; // Clear the display if input value is empty
    }
  });
};

const homeButton = document.getElementById("home");

// Add a click event listener to the home button
homeButton.addEventListener("click", function () {
  showImages();
  handleSearchFunctionality();
});

showImages();
handleSearchFunctionality();