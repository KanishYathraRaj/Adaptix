


export const getCode= async (prompt) => {
  const source = getSource();
  if (source) {
    try {
      const generatedCode = await generateCode(source,prompt);
      console.log('Generated Code:', generatedCode);

      const editableElement = document.querySelector('.editable');
      if (editableElement) {
        editableElement.innerHTML = generatedCode;
      } else {
        console.log('No element with class "editable" found to update.');
      }
    } catch (error) {
      console.error('Error generating code:', error);
    }
  }
};

async function generateCode(pageSource,prompt) {
  const API_KEY = 'AIzaSyDtRxzdQ1RLZNH2KSMtsNWP8ZKyIrtDBUo';
  const RATE_LIMIT_DELAY = 1000; // 1 second between requests
  let lastRequestTime = 0;

  const MAX_RETRIES = 3;
  let retries = 0;

  while (retries < MAX_RETRIES) {
      try {
          console.log(`Attempt ${retries + 1} of ${MAX_RETRIES}`);

          if (retries > 0) {
              const backoffDelay = RATE_LIMIT_DELAY * Math.pow(2, retries);
              console.log(`Retry backoff: waiting ${backoffDelay}ms`);
              await new Promise(resolve => setTimeout(resolve, backoffDelay));
          }

          // Regular rate limiting
          const now = Date.now();
          const timeSinceLastRequest = now - lastRequestTime;
          if (timeSinceLastRequest < RATE_LIMIT_DELAY) {
              const waitTime = RATE_LIMIT_DELAY - timeSinceLastRequest;
              console.log(`Rate limit: waiting ${waitTime}ms`);
              await new Promise(resolve => 
                  setTimeout(resolve, waitTime)
              );
          }
          lastRequestTime = Date.now();

          console.log('Making API request...', {
              timestamp: new Date().toISOString(),
              prompt: prompt.substring(0, 50) + '...'
          });

          const fullPrompt = `
          You are a code modification expert. I will provide you with the current webpage code and a user's modification request.
          Your task is to:

          1. Analyze the entire codebase thoroughly
          2. Provide COMPLETE code changes that can be directly implemented
          3. Ensure the changes are syntactically correct and maintain functionality
          4. Include ALL necessary code including imports and dependencies
          3. Each element will be given a unique identifier
          5. Respond ONLY in this exact format:
          6. make it visually appealing.
          7. if the query is related to teaching them , then respond with proper answer with proper styles and formatting added to it.

          Format:
          <div>
            updated Webpage source
          <div>
          

          Current webpage source:
          ${pageSource}

          User modification request: ${prompt}
      `;

          const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${API_KEY}`, {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                  contents: [{
                      parts: [{
                          text: fullPrompt
                      }]
                  }]
              })
          });

          if (!response.ok) {
              throw new Error(`API request failed with status ${response.status}`);
          }

          const data = await response.json();
          console.log('API response received:', data);

          console.log("Generated Code:\n", data.candidates[0].content.parts[0].text);
          return data.candidates[0].content.parts[0].text;

      } catch (error) {
          console.error('Error in API request:', {
              error: error.message,
              retry: retries + 1,
              maxRetries: MAX_RETRIES
          });
          
          retries++;
          if (retries === MAX_RETRIES || !error.message.includes('429')) {
              throw error;
          }
      }
  }
}

const getSource = () => {
  const editableElement = document.querySelector('.editable');

  if (editableElement) {
    const editableSource = editableElement.innerHTML;
    console.log(editableSource);
    return editableSource;
  } else {
    console.log('No element with class "editable" found.');
    return null;
  }
};