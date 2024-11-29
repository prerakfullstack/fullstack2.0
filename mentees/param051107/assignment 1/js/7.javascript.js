<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Car Object Example</title>
</head>
<body>
    <button id="startButton">Start Car</button>

    <script>
        // Step 1: Create an object representing a car with properties and a method
        const car = {
            make: 'Toyota',
            model: 'Corolla',
            year: 2021,
            startEngine: function() {
                console.log('Engine started!');
            }
        };

        // Step 2: Add an event listener to the button
        document.getElementById('startButton').addEventListener('click', function() {
           
            car.startEngine();
        });
    </script>
</body>
</html>
