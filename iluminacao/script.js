document.addEventListener("DOMContentLoaded", function() {
    const automation = AutomacaoLuzes.getInstance();

    const livingroomBtnOn = document.getElementById('livingroom-on');
    const livingroomBtnOff = document.getElementById('livingroom-off');
    const kitchenBtnOn = document.getElementById('kitchen-on');
    const kitchenBtnOff = document.getElementById('kitchen-off');
    const bathroomBtnOn = document.getElementById('bathroom-on');
    const bathroomBtnOff = document.getElementById('bathroom-off');
    const roomBtnOn = document.getElementById('room-on');
    const roomBtnOff = document.getElementById('room-off');

    const livingroomView = document.getElementById('livingroom');
    const kitchenView = document.getElementById('kitchen');
    const bathroomView = document.getElementById('bathroom');
    const roomView = document.getElementById('room');

    livingroomBtnOn.addEventListener('click', () => {
        automation.toggle('livingroom');
    });

    livingroomBtnOff.addEventListener('click', () => {
        automation.toggle('livingroom');
    });

    kitchenBtnOn.addEventListener('click', () => {
        automation.toggle('kitchen');
    });

    kitchenBtnOff.addEventListener('click', () => {
        automation.toggle('kitchen');
    });

    bathroomBtnOn.addEventListener('click', () => {
        automation.toggle('bathroom');
    });

    bathroomBtnOff.addEventListener('click', () => {
        automation.toggle('bathroom');
    });

    roomBtnOn.addEventListener('click', () => {
        automation.toggle('room');
    });

    roomBtnOff.addEventListener('click', () => {
        automation.toggle('room');
    });

    automation.subscribe('livingroom', () => {
        const isActive = automation.getState('livingroom');
        if (isActive) {
            livingroomView.classList.add('active');
        } else {
            livingroomView.classList.remove('active');
        }
    });

    automation.subscribe('kitchen', () => {
        const isActive = automation.getState('kitchen');
        if (isActive) {
            kitchenView.classList.add('active');
        } else {
            kitchenView.classList.remove('active');
        }
    });

    automation.subscribe('bathroom', () => {
        const isActive = automation.getState('bathroom');
        if (isActive) {
            bathroomView.classList.add('active');
        } else {
            bathroomView.classList.remove('active');
        }
    });

    automation.subscribe('room', () => {
        const isActive = automation.getState('room');
        if (isActive) {
            roomView.classList.add('active');
        } else {
            roomView.classList.remove('active');
        }
    });
});

