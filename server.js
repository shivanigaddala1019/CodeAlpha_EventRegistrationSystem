const express = require("express");
const fs = require("fs");

const app = express();
const PORT = 4000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Event Registration System Running");
});

app.post("/events", (req, res) => {
    const { name, date } = req.body;

    let events = JSON.parse(fs.readFileSync("events.json"));

    const newEvent = {
        id: Date.now(),
        name,
        date
    };

    events.push(newEvent);

    fs.writeFileSync(
        "events.json",
        JSON.stringify(events, null, 2)
    );

    res.json(newEvent);
});

app.get("/events", (req, res) => {
    const events = JSON.parse(
        fs.readFileSync("events.json")
    );

    res.json(events);
});

app.post("/register", (req, res) => {
    const { eventId, userName } = req.body;

    let registrations = JSON.parse(
        fs.readFileSync("registrations.json")
    );

    const registration = {
        eventId,
        userName
    };

    registrations.push(registration);

    fs.writeFileSync(
        "registrations.json",
        JSON.stringify(registrations, null, 2)
    );

    res.json({
        message: "Registration Successful",
        registration
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});