async function loadData() {
    try {
        const response = await fetch("http://localhost:3000/api/data");
        const data = await response.json();

        console.log("Data from backend:", data);
        document.getElementById("output").textContent = JSON.stringify(data, null, 2);
    } catch (err) {
        console.error("Error fetching data,", err);
    }
}

loadData();