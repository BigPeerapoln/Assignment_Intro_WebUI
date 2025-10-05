// Default progress bar animation
document.addEventListener('DOMContentLoaded', () => {
    
    const progressBar = document.getElementById('progressBar');
    const progressText = document.getElementById('progressText');
    const trackingStatusCard = document.getElementById('trackingStatusCard');
    const finalExamMenuCard = document.createElement('a');
    finalExamMenuCard.classList.add('dashboard-menu-card', 'block', 'bg-white', 'rounded-lg', 'shadow-md', 'p-6', 'text-center', 'hidden');
    finalExamMenuCard.href = '#';
    finalExamMenuCard.onclick = showFinalExamModal;

    const iconContainer = document.createElement('div');
    iconContainer.classList.add('mb-4');
    iconContainer.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-blue-500 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <circle cx="12" cy="15" r="4"></circle>
            <path d="M15 11l-3 4-2-2"></path>
        </svg>`;

    const title = document.createElement('h2');
    title.classList.add('text-xl', 'font-semibold', 'text-gray-800');
    title.textContent = 'ยื่นสอบโครงงานจบ';

    finalExamMenuCard.appendChild(iconContainer);
    finalExamMenuCard.appendChild(title);
    
    // Find the parent grid and append the new card
    const gridContainer = document.querySelector('.grid.grid-cols-1');
    if (gridContainer) {
        gridContainer.appendChild(finalExamMenuCard);
    }
    
    let progress = 0;
    const finalProgress = 100;

    const interval = setInterval(() => {
        if (progress >= finalProgress) {
            clearInterval(interval);
            // After 100%, hide the "เพิ่มความคืบหน้ารายสัปดาห์" button
            const progressButton = trackingStatusCard.querySelector('button');
            if (progressButton) {
                progressButton.style.display = 'none';
            }
            // Show the "Final Project Exam" menu card
            finalExamMenuCard.classList.remove('hidden');
        } else {
            progress += 1;
            progressBar.style.width = progress + '%';
            progressText.textContent = progress + '%';
        }
    }, 50); // Slower animation for better visibility

    // For demonstration: Set initial status to 3 (approved) to show the notification badge.
    updateStatus(3);
});

// Function to show the proposal form modal
function showProposalForm() {
    closeAllContent();
    const modal = document.getElementById('proposalModal');
    if (modal) {
        modal.style.display = 'flex';
    }
}

// Function to show the status page as a modal
function showStatusPage() {
    closeAllContent();
    const modal = document.getElementById('statusModal');
    modal.style.display = 'flex';

    updateStatus(3);
}
// Function to show the final exam submission alert
function submitFinalExam() {
    const finalExamModal = document.getElementById('finalExamModal'); // assuming you have this modal in your HTML
    if (finalExamModal) {
        finalExamModal.classList.add('hidden'); // Hide the submission form modal
    }
    document.getElementById('finalExamAlert').classList.remove('hidden'); // Show the success alert
}

// Function to handle the redirect after clicking OK on the alert
function redirectAfterFinalExam() {
    closeModal('finalExamAlert'); // Hide the alert modal
    window.location.href = 'final_check_state.html'; // Redirect to the specified page
}

// Function to show notification details card as a modal
function showNotificationDetails() {
    closeAllContent();
    const modal = document.getElementById('notificationModal');
    modal.style.display = 'flex';
    updateNotificationBadge(0);
}

// Function to close any modal
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
    }
}

// Function to submit proposal and show success alert
function submitProposal() {
    closeModal('proposalModal');
    const alertModal = document.getElementById('submissionAlert');
    const alertTitle = document.getElementById('alertTitle');
    const alertMessage = document.getElementById('alertMessage');
    const successIcon = document.getElementById('successIcon');

    if (alertModal && alertTitle && alertMessage && successIcon) {
        alertTitle.textContent = "เสนอหัวข้อโครงงาน สำเร็จ";
        alertMessage.textContent = "กรุณารอผลการตรวจสอบ";
        successIcon.classList.remove('text-red-500');
        successIcon.classList.add('text-green-500');
        alertModal.style.display = 'flex';
    }
}

// Function to show the progress form modal
function showProgressModal() {
    closeAllContent();
    const modal = document.getElementById('progressModal');
    if (modal) {
        modal.style.display = 'flex';
    }
}

// Function to handle the progress form submission and show success alert
function submitProgress() {
    const progressDetail = document.getElementById('progressDetail').value;
    const documentFile = document.getElementById('documentFile').files[0];
    const documentLink = document.getElementById('documentLink').value;

    closeModal('progressModal');

    const alertModal = document.getElementById('submissionAlert');
    const alertTitle = document.getElementById('alertTitle');
    const alertMessage = document.getElementById('alertMessage');
    const successIcon = document.getElementById('successIcon');

    if (alertModal && alertTitle && alertMessage && successIcon) {
        alertTitle.textContent = "เพิ่มความคืบหน้าของโครงงานสำเร็จ";
        alertMessage.textContent = "กรุณารออาจารย์ที่ปรึกษาและอาจารย์รายวิชาตรวจสอบ";
        successIcon.classList.remove('text-red-500');
        successIcon.classList.add('text-green-500');
        alertModal.style.display = 'flex';
    }
}


// Function to show the final exam submission modal
function showFinalExamModal() {
    closeAllContent();
    const modal = document.getElementById('finalExamModal');
    if (modal) {
        modal.style.display = 'flex';
    }
}

// Function to handle the final exam submission and show success alert
function submitFinalExam() {
    closeModal('finalExamModal');
    const alertModal = document.getElementById('submissionAlert');
    const alertTitle = document.getElementById('alertTitle');
    const alertMessage = document.getElementById('alertMessage');
    const successIcon = document.getElementById('successIcon');

    if (alertModal && alertTitle && alertMessage && successIcon) {
        alertTitle.textContent = "ยื่นสอบโครงงานจบสำเร็จ";
        alertMessage.textContent = "กรุณารอผลการตรวจสอบและประกาศวันสอบ";
        successIcon.classList.remove('text-red-500');
        successIcon.classList.add('text-green-500');
        alertModal.style.display = 'flex';
    }
}

// Helper function to hide all main content
function closeAllContent() {
    const proposalModal = document.getElementById('proposalModal');
    const submissionAlert = document.getElementById('submissionAlert');
    const statusModal = document.getElementById('statusModal');
    const notificationModal = document.getElementById('notificationModal');
    const progressModal = document.getElementById('progressModal');
    const finalExamModal = document.getElementById('finalExamModal');

    if (statusModal) statusModal.style.display = 'none';
    if (proposalModal) proposalModal.style.display = 'none';
    if (submissionAlert) submissionAlert.style.display = 'none';
    if (notificationModal) notificationModal.style.display = 'none';
    if (progressModal) progressModal.style.display = 'none';
    if (finalExamModal) finalExamModal.style.display = 'none';
}

// Function to update the status progress
function updateStatus(status) {
    const step2Icon = document.getElementById('step2Icon');
    const step2Text = document.getElementById('step2Text');
    const step3Icon = document.getElementById('step3Icon');
    const step3Text = document.getElementById('step3Text');
    const progressLine = document.getElementById('progressLine');
    const viewDetailsBtn = document.getElementById('viewDetailsBtn');

    step2Icon.classList.remove('bg-green-500');
    step2Icon.classList.add('bg-gray-400');
    step2Text.classList.remove('text-gray-800');
    step2Text.classList.add('text-gray-600');

    step3Icon.classList.remove('bg-green-500');
    step3Icon.classList.add('bg-gray-400');
    step3Text.classList.remove('text-gray-800');
    step3Text.classList.add('text-gray-600');

    if (status >= 2) {
        step2Icon.classList.remove('bg-gray-400');
        step2Icon.classList.add('bg-green-500');
        step2Text.classList.remove('text-gray-600');
        step2Text.classList.add('text-gray-800');
        progressLine.style.width = '50%';
    }
    if (status >= 3) {
        step3Icon.classList.remove('bg-gray-400');
        step3Icon.classList.add('bg-green-500');
        step3Text.classList.remove('text-gray-600');
        step3Text.classList.add('text-gray-800');
        progressLine.style.width = '100%';
        viewDetailsBtn.classList.remove('hidden');
        updateNotificationBadge(1);
    } else {
        viewDetailsBtn.classList.add('hidden');
    }
}

// Function to update the notification badge
function updateNotificationBadge(count) {
    const badge = document.getElementById('notificationBadge');
    if (badge) {
        if (count > 0) {
            badge.textContent = count;
            badge.classList.remove('hidden');
        } else {
            badge.classList.add('hidden');
        }
    }
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
}


