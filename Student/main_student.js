// Default progress bar animation
document.addEventListener('DOMContentLoaded', () => {
    const progressBar = document.getElementById('progressBar');
    const progressText = document.getElementById('progressText');
    const showProgressBtn = document.getElementById('showProgressBtn');
    const trackingStatusCard = document.getElementById('trackingStatusCard');

    // Set fixed progress to 50% without animation
    const fixedProgress = 50;
    progressBar.style.width = fixedProgress + '%';
    progressText.textContent = fixedProgress + '%';

    // Remove the breathing animation
    trackingStatusCard.classList.remove('animate-pulse');

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