const presets = document.querySelectorAll('.present');
const boxes = document.querySelectorAll('.box');
const presentBox = document.querySelector('.presents-box');
const chosenBox = document.querySelector('.chosen-box');
const sendBtn = document.querySelector('.send-btn');

presets.forEach((present) => {
	present.addEventListener('dragstart', () => {
		present.classList.add('is-dragged');
	});
	present.addEventListener('dragend', () => {
		present.classList.remove('is-dragged');
	});
});

boxes.forEach((box) => {
	box.addEventListener('dragover', (e) => {
		e.preventDefault();
		const isDragged = document.querySelector('.is-dragged');
		box.appendChild(isDragged);
		handlePresents();
        
	});
});
const handlePresents = () => {
	const unChosenPresents = presentBox.querySelectorAll('.present');
	if (chosenBox.childElementCount > 2) {
		unChosenPresents.forEach((present) => {
			present.classList.add('present-disabled');
			present.setAttribute('draggable', 'false');
			sendBtn.disabled = false;
		});
	} else {
        unChosenPresents.forEach((present) => {
			present.classList.remove('present-disabled');
            present.setAttribute('draggable', 'true');
		});
	}
};
