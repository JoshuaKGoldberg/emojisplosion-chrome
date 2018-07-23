window.emojisplosion = emojisplosion;

const triggerEmojisplosion = (event) => {
    emojisplosion({
        position: {
            x: event.clientX,
            y: event.clientY,
        },
    });
};

for (const eventName of ["click", "drag", "touchmove"]) {
    document.addEventListener(eventName, triggerEmojisplosion);
}
