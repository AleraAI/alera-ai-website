/**
 * Form Service for Alera AI
 * Handles submissions to Web3Forms (Free 250 submissions/month)
 */

const WEB3FORMS_KEY = 'd18becb2-8bc4-4d50-a83a-7be4cccb1834'; // User's Web3Forms Access Key

export const submitToWeb3Forms = async (data, accessKey = WEB3FORMS_KEY) => {
    try {
        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                access_key: accessKey,
                ...data,
                from_name: 'Alera AI Website',
                subject: `New ${data.formType || 'Form'} Submission from Alera AI`
            })
        });

        const result = await response.json();

        if (result.success) {
            return { success: true, message: 'Submission successful!' };
        } else {
            return {
                success: false,
                message: result.message || 'Oops! There was a problem submitting your form.'
            };
        }
    } catch (error) {
        return {
            success: false,
            message: 'Network error. Please try again later.'
        };
    }
};
