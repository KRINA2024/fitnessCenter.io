// Calorie Burn Calculator
const intensitySelect = document.getElementById('intensity');
const durationInput = document.getElementById('duration');
const calculateButton = document.getElementById('calculate');
const caloriesSpan = document.getElementById('calories');

calculateButton.addEventListener('click', function () {
    const intensity = intensitySelect.value;
    const duration = durationInput.value;
    let caloriesBurned = 0;

    // Your calculation logic here
    // For example:
    if (intensity === 'low') {
        caloriesBurned = duration * 5;
    } else if (intensity === 'medium') {
        caloriesBurned = duration * 8;
    } else if (intensity === 'high') {
        caloriesBurned = duration * 10;
    }

    caloriesSpan.textContent = caloriesBurned;
});

// Membership Inquiry Form
const inquiryForm = document.querySelector('.membership-inquiry');

inquiryForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Your code to handle form submission here
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Reset form fields
    inquiryForm.reset();
});

// Add animations on hover
const plans = document.querySelectorAll('.plan');
const images = document.querySelectorAll('.service img');

plans.forEach(plan => {
    plan.addEventListener('mouseenter', () => {
        plan.style.transform = 'scale(1.05)';
    });

    plan.addEventListener('mouseleave', () => {
        plan.style.transform = 'scale(1)';
    });
});

images.forEach(image => {
    image.addEventListener('mouseenter', () => {
        image.style.opacity = '0.8';
    });

    image.addEventListener('mouseleave', () => {
        image.style.opacity = '1';
    });
});