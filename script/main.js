// trigger to play music in the background with sweetalert
window.addEventListener('load', () => {
    Swal.fire({
        title: 'Do you want to play music in the background?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
    }).then((result) => {
        if (result.isConfirmed) {
            document.querySelector('.song').play();
            animationTimeline();
        } else {
            animationTimeline();
        }
    });
});


// animation timeline
const animationTimeline = () => {
    // split chars that needs to be animated individually
    const textBoxChars = document.getElementsByClassName("hbd-chatbox")[0];
    const hbd = document.getElementsByClassName("wish-hbd")[0];

    textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML
        .split("")
        .join("</span><span>")}</span>`;

    hbd.innerHTML = `<span>${hbd.innerHTML
        .split("")
        .join("</span><span>")}</span>`;

    const ideaTextTrans = {
        opacity: 0,
        y: -20,
        rotationX: 5,
        skewX: "15deg"
    }

    const ideaTextTransLeave = {
        opacity: 0,
        y: 20,
        rotationY: 5,
        skewX: "-15deg"
    }
    setTimeout(() => {
        const names = ["Julie", "Juju"];
        const nameTarget = document.getElementById("name");
        let nameIndex = 0;
        let charIndex = 0;
      
        function type() {
          if (charIndex <= names[nameIndex].length) {
            nameTarget.textContent = names[nameIndex].substring(0, charIndex);
            charIndex++;
            setTimeout(type, 120);
          } else {
            setTimeout(erase, 1500);
          }
        }
      
        function erase() {
          if (charIndex >= 0) {
            nameTarget.textContent = names[nameIndex].substring(0, charIndex);
            charIndex--;
            setTimeout(erase, 50);
          } else {
            nameIndex = (nameIndex + 1) % names.length;
            setTimeout(type, 300);
          }
        }
      
        type();
      }, 800); // delay to match when .one appears
    // timeline
    const tl = new TimelineMax();

    tl.to(".container", 0.6, {
        visibility: "visible"
    })
    .from(".one", 0.7, {
        opacity: 0,
        y: 10
    })
    .from(".two", 0.4, {
        opacity: 0,
        y: 10
    })
    .to(".one",
        0.7,
        {
            opacity: 0,
            y: 10
        },
    "+=3.5")


    
   
    .from(".bday-1", 0.7, {opacity: 0, y: 10})
    .to(".bday-1", 0.7, {opacity: 0, y: -10}, "+=2")
    
    .from(".bday-2", 0.7, {opacity: 0, y: 10})
    .to(".bday-2", 0.6, {opacity: 0, y: -10}, "+=2")
    
    .from(".bday-3", 0.7, {opacity: 0, y: 10})
    .to(".bday-3", 0.6, {opacity: 0, y: -10}, "+=2.5")
    
    .from(".bday-4", 0.7, {opacity: 0, y: 10})
    .to(".bday-4", 0.6, {opacity: 0, y: -10}, "+=2")


    
    .from(".four", 0.7, {
        scale: 0.2,
        opacity: 0,
    })
    .from(".fake-btn", 0.3, {
        scale: 0.2,
        opacity: 0,
    })
    .staggerTo(
        ".hbd-chatbox span",
        1.5, {
            visibility: "visible",
        },
        0.05
    )
    .to(".fake-btn", 0.1, {
        backgroundColor: "rgb(127, 206, 248)",
    },
    "+=4")

    .to(
        ".four",
        0.5, {
            scale: 0.2,
            opacity: 0,
            y: -150
        },
    "+=1")
    






    .from(".idea-1", 0.7, ideaTextTrans)
    .to(".idea-1", 0.7, ideaTextTransLeave, "+=1")
    .from(".idea-3", 0.7, ideaTextTrans)
    .to(".idea-3", 0.7, ideaTextTransLeave, "+=1")
    .from(".idea-4", 0.7, ideaTextTrans)
    .to(".idea-4", 0.7, ideaTextTransLeave, "+=1")
    .from(".idea-5", 0.7, ideaTextTrans)
    .to(".idea-5", 0.7, ideaTextTransLeave, "+=1")
    




    .staggerFromTo(
        ".baloons img",
        2.5, {
            opacity: 0.9,
            y: 1400,
        }, {
            opacity: 1,
            y: -1000,
        },
        0.1
    )
    .from(
        ".profile-picture",
        0.5, {
            scale: 3.6,
            opacity: 0,
            x: 25,
            y: -25,
            rotationZ: -45,
        },
        "-=2"
    )
    .from(".hat", 0.5, {
        x: -100,
        y: 350,
        rotation: -180,
        opacity: 0,
    })
    .staggerFrom(
        ".wish-hbd span",
        1, {
            opacity: 0,
            y: -50,
            // scale: 0.3,
            rotation: 150,
            skewX: "30deg",
            ease: Elastic.easeOut.config(1, 0.5),
        },
        0.15
    )
    .staggerFromTo(
        ".wish-hbd span",
        1, {
            scale: 1.4,
            rotationY: 150,
        }, {
            scale: 1,
            rotationY: 0,
            color: "#ff69b4",
            ease: Expo.easeOut,
        },
        0.1,
        "party"
    )
    
    .from(
        ".wish h5",
        0.5, {
            opacity: 0,
            y: 10,
            skewX: "-15deg",
        },
        "party"
        
    )

    
    .staggerTo(
        ".eight svg",
        1.5, {
            visibility: "visible",
            opacity: 0,
            scale: 80,
            repeat: 3,
            repeatDelay: 1.4,
        },
        0.3
    )
    .to(".six", 0.5, {
        opacity: 0,
        y: 30,
        zIndex: "-1",
    }, "+=4") // delay


    .staggerFrom(".nine p", 1, ideaTextTrans, 1.2)
    .to(
        ".last-smile",
        0.5, {
            rotation: 90,
        },
        "+=1"
    );

    setTimeout(() => {
        const names = ["Wifey", "Julie", "Juju", "Love"];
        const nameTarget = document.querySelector("#wishText .typed-name");
        let nameIndex = 0;
        let charIndex = 0;
      
        function typeWriter() {
          if (charIndex <= names[nameIndex].length) {
            nameTarget.textContent = names[nameIndex].substring(0, charIndex);
            charIndex++;
            setTimeout(typeWriter, 120);
          } else {
            setTimeout(eraseWriter, 1500);
          }
        }
      
        function eraseWriter() {
          if (charIndex >= 0) {
            nameTarget.textContent = names[nameIndex].substring(0, charIndex);
            charIndex--;
            setTimeout(eraseWriter, 50);
          } else {
            nameIndex = (nameIndex + 1) % names.length;
            setTimeout(typeWriter, 300);
          }
        }
      
        typeWriter();
      }, 3500); // Delay until the h5 is shown
      

    // Restart Animation on click
    const replyBtn = document.getElementById("replay");
    replyBtn.addEventListener("click", () => {
        tl.restart();
    });
}
