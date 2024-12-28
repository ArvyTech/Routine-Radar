from transformers import pipeline

summarizer = pipeline("summarization", model="facebook/bart-large-cnn")

def generate_feedback(activity_description):
    """
    Generate learning feedback based on the provided activity description.
    :param activity_description: A string describing the activity.
    :return: A string containing the feedback.
    """

    if not activity_description:
        return "No activity description provided for feedback."
    
    try:
        summary = summarizer(activity_description, max_length=50, min_length=10, do_sample=False)
        feedback = summary[0]["summary_text"]
        return feedback
    except Exception as e:
        return f"Error generating feedback: {str(e)}"