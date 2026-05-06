console.log("🔥 STARTING SERVER");


import app from "./app.js"
try {
    const PORT = 7000;
    app.listen(PORT, () => {
        console.log(`Server is running on ${PORT}`);
    });
} catch (err) {
    console.error("ERROR DURING START:", err);
}