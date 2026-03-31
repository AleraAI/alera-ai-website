/**
 * Form Service for Alera AI
 * Handles submissions to Formspree
 */

const FORMSPREE_ID = 'YOUR_FORMSPREE_ID'; // Replace with your actual Formspree ID

export const submitToFormspree = async (data, formId = FORMSPREE_ID) => {
    try {
        const response = await fetch(`https://formspree.io/f/${formId}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            return { success: true, message: 'Submission successful!' };
        } else {
            let message = 'Oops! There was a problem submitting your form.';
            try {
                const errorData = await response.json();
                message = errorData.error || message;
            } catch (e) {
                // Fallback for non-JSON errors
                if (response.status === 404) message = 'Form endpoint not found. Please check your Formspree ID.';
            }
            return { success: false, message };
        }
    } catch (error) {
        return {
            success: false,
            message: 'Network error. Please try again later.'
        };
    }
};
