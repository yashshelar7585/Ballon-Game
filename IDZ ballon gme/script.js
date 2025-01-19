// Array of balloon images
const balloonImages = [
    'Ballon 1.png',  // Path to first balloon image
    'Ballon 2.png',  // Path to second balloon image
    'Ballon 3.png',  // Path to third balloon image
    'Ballon 4.png',  // Path to fourth balloon image 
    'Ballon 5.png',  // Path to fifth balloon image
    'Ballon 6.png',  // Path to sixth balloon image
    'Ballon 7.png',  // Path to seventh balloon image
    'Ballon 8.png',  // Path to eighth balloon image
    'Ballon 9.png',  // Path to nineth balloon image
    'Ballon 10.png', // Path to tenth balloon image
];

// Array of small images to go inside balloons
const smallImages = [
    'ALPHA-A.png',  // Path to first small image
    'ALPHA-B.png',  // Path to second small image
    'ALPHA-C.png',  // Path to third small image
    'ALPHA-D.png',  // Path to fourth small image
    'ALPHA-E.png',  // Path to fifth small image
    'ALPHA-F.png',  // Path to sixth small image
    'ALPHA-G.png',  // Path to seventh small image
    'ALPHA-H.png',  // Path to eighth small image
    'ALPHA-I.png',  // Path to nineth small image
    'ALPHA-J.png',  // Path to tenth small image
    'ALPHA-K.png',  // Path to Eleventh small image
    'ALPHA-L.png',  // Path to twelveth small image
    'ALPHA-M.png',  // Path to thirteenth small image
    'ALPHA-N.png',  // Path to fourteenth small image
    'ALPHA-O.png',  // Path to fifteenth small image
    'ALPHA-P.png',  // Path to sixteenth small image
    'ALPHA-Q.png',  // Path to seventeenth small image
    'ALPHA-R.png',  // Path to eighteenth small image
    'ALPHA-S.png',  // Path to nineteenthsmall image
    'ALPHA-T.png',  // Path to tweentethsmall image
    'ALPHA-U.png',  // Path to twentyoneth small image
    'ALPHA-V.png',  // Path to twentytwoth small image
    'ALPHA-W.png',  // Path to twentythirdth small image
    'ALPHA-W.png',  // Path to twentyfourth small image
    'ALPHA-X.png',  // Path to twentyfiveth small image
    'ALPHA-Y.png',  // Path to twentysixth small image
    'ALPHA-Z.png'   // Path to twenty seventh small image
];

function inflateBalloon() {
    // Create a new balloon dynamically
    const balloon = document.createElement('div');
    balloon.classList.add('balloon');

    // Randomly select a balloon image from the array
    const randomBalloonIndex = Math.floor(Math.random() * balloonImages.length);
    const selectedBalloonImage = balloonImages[randomBalloonIndex];
    balloon.style.backgroundImage = `url('${selectedBalloonImage}')`;

    // Randomly select a small image to go inside the balloon
    const randomSmallImageIndex = Math.floor(Math.random() * smallImages.length);
    const selectedSmallImage = smallImages[randomSmallImageIndex];

    // Create the small image element inside the balloon
    const smallImageElement = document.createElement('img');
    smallImageElement.src = selectedSmallImage;
    smallImageElement.classList.add('small-image');

    // Append the small image element to the balloon
    balloon.appendChild(smallImageElement);

    // Set initial balloon position (centered above the pump)
    const startX = Math.random() * 80 + 10; // Random horizontal position within 10vw to 90vw
    balloon.style.left = `${startX}vw`;
    balloon.style.bottom = '0';  // Start at the bottom of the screen

    // Add the balloon to the body
    document.body.appendChild(balloon);

    // Function to animate the balloon's upward movement
    let upwardMovement = 0;

    function moveBalloon() {
        upwardMovement += 0.5; // Move up gradually
        balloon.style.transform = `translateY(-${upwardMovement}vh)`;

        // If the balloon is still within the viewport, continue moving it upwards
        if (upwardMovement < 100) {
            requestAnimationFrame(moveBalloon);
        } else {
            // Remove balloon if it goes off-screen
            balloon.remove();
        }
    }

    // Start moving the balloon upwards
    moveBalloon();

    // Add event listener to burst the balloon on click
    balloon.addEventListener('click', () => {
        burstBalloon(balloon);
    });
}

function burstBalloon(balloon) {
    // Simulate balloon burst by hiding the balloon and removing it
    balloon.style.transition = 'transform 0.2s ease-in-out, opacity 0.2s';
    balloon.style.transform = 'scale(0)'; // Shrink the balloon
    balloon.style.opacity = '0'; // Fade it out

    // Remove the balloon after the transition ends
    setTimeout(() => {
        balloon.remove();
    }, 200); // Matches the duration of the transition
}
