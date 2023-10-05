window.addEventListener('scroll', function() {
    var contentContainer = document.querySelector('.content-container');
    if (window.scrollY > 50) {
        contentContainer.classList.add('scrolled');
    } 
    else 
    {
        contentContainer.classList.remove('scrolled');
    }
});

$(document).ready(function() {
    $('#section-1 h2').waypoint(function(direction) {
        if (direction === 'down') {
            $('#section-1 h2').addClass('animate__animated animate__fadeInLeft');
        } else {
            $('#section-1 h2').removeClass('animate__animated animate__fadeInLeft');
        }
    }, { offset: '80%' });

    $('#section-1 h3').waypoint(function(direction) {
        if (direction === 'down') {
            $('#section-1 h3').addClass('animate__animated animate__fadeInLeft');
        } else {
            $('#section-1 h3').removeClass('animate__animated animate__fadeInLeft');
        }
    }, { offset: '90%' });

    $('#section-1-article-2').waypoint(function(direction) {
        if (direction === 'down') {
            $('#section-1-article-2').addClass('animate__animated animate__fadeInLeft');
        } else {
            $('#section-1-article-2').removeClass('animate__animated animate__fadeInLeft');
        }
    }, { offset: '90%' });

    $('#section-1-article-1').waypoint(function(direction) {
        if (direction === 'down') {
            $('#section-1-article-1').addClass('animate__animated animate__fadeInLeft');
        } else {
            $('#section-1-article-1').removeClass('animate__animated animate__fadeInLeft');
        }
    }, { offset: '90%' });

    $('#section-2 h2').waypoint(function(direction) {
        if (direction === 'down') {
            $('#section-2 h2').addClass('animate__animated animate__fadeInLeft');
        } else {
            $('#section-2 h2').removeClass('animate__animated animate__fadeInLeft');
        }
    }, { offset: '80%' });

    $('#section-2 h3').waypoint(function(direction) {
        if (direction === 'down') {
            $('#section-2 h3').addClass('animate__animated animate__fadeInLeft');
        } else {
            $('#section-2 h3').removeClass('animate__animated animate__fadeInLeft');
        }
    }, { offset: '90%' });

    for (let i = 1; i <= 17; i++) {
        $(`#section-2-article-${i}`).waypoint(function(direction) {
            if (direction === 'down') {
                $(`#section-2-article-${i}`).addClass('animate__animated animate__fadeInLeft');
            } else {
                $(`#section-2-article-${i}`).removeClass('animate__animated animate__fadeInLeft');
            }
        }, { offset: '90%' });
    }

    $('#section-3 h2').waypoint(function(direction) {
        if (direction === 'down') {
            $('#section-3 h2').addClass('animate__animated animate__fadeInLeft');
        } else {
            $('#section-3 h2').removeClass('animate__animated animate__fadeInLeft');
        }
    }, { offset: '90%' });

    $('#section-3 h3').waypoint(function(direction) {
        if (direction === 'down') {
            $('#section-3 h3').addClass('animate__animated animate__fadeInLeft');
        } else {
            $('#section-3 h3').removeClass('animate__animated animate__fadeInLeft');
        }
    }, { offset: '90%' });

    for (let i = 1; i <= 10; i++) {
        $(`#section-3-article-${i}`).waypoint(function(direction) {
            if (direction === 'down') {
                $(`#section-3-article-${i}`).addClass('animate__animated animate__fadeInLeft');
            } else {
                $(`#section-3-article-${i}`).removeClass('animate__animated animate__fadeInLeft');
            }
        }, { offset: '90%' });
    }

    $('#section-4 h2').waypoint(function(direction) {
        if (direction === 'down') {
            $('#section-4 h2').addClass('animate__animated animate__fadeInLeft');
        } else {
            $('#section-4 h2').removeClass('animate__animated animate__fadeInLeft');
        }
    }, { offset: '90%' });

    $('#section-4 h3').waypoint(function(direction) {
        if (direction === 'down') {
            $('#section-4 h3').addClass('animate__animated animate__fadeInLeft');
        } else {
            $('#section-4 h3').removeClass('animate__animated animate__fadeInLeft');
        }
    }, { offset: '90%' });

    for (let i = 1; i <= 7; i++) {
        $(`#section-4-article-${i}`).waypoint(function(direction) {
            if (direction === 'down') {
                $(`#section-4-article-${i}`).addClass('animate__animated animate__fadeInLeft');
            } else {
                $(`#section-4-article-${i}`).removeClass('animate__animated animate__fadeInLeft');
            }
        }, { offset: '90%' });
    }

});


// Set the interval in milliseconds
var interval = 5000;

// Get all the radio buttons
var radioButtons = document.querySelectorAll('input[type="radio"][name="select"]');

// Set the initial index
var index = 0;

// Add a click event listener to each radio button
radioButtons.forEach(function(radioButton, i) {
  radioButton.addEventListener('click', function() {
    // Update the index when a radio button is clicked
    index = i;
  });
});

// Start the interval
setInterval(function() {
  // Increment the index
  index++;

  // If the index is greater than the number of radio buttons, reset it to 0
  if (index >= radioButtons.length) {
    index = 0;
  }

  // Simulate a click on the current radio button
  radioButtons[index].click();
}, interval);

