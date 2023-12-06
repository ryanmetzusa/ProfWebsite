document.addEventListener("DOMContentLoaded", function () {
    // Sample professor information
    const professorInfo = {
        name: "Prof. Mo Shi",
        department: "Business",
        office: "N/A",
        email: "molu.shi@louisville.edu",
    };
    const video = document.getElementById("video-background");
    const setVideoHeight = () => {
        video.style.height = window.innerHeight + "px";
    };

    window.addEventListener("resize", setVideoHeight);
    setVideoHeight();

    // Display professor information
    const header = document.querySelector("header");
    header.innerHTML = `<h1>${professorInfo.name}</h1>
                        <p>Department: ${professorInfo.department}</p>
                        <p>Office: ${professorInfo.office}</p>
                        <p>Email: ${professorInfo.email}</p>`;

    // Sample assignment data
    const assignments = [
        { name: "Assignment 1", htmlLink: "http://play.inginf.units.it/", recommendedCompletionDate:"11/02/2023", officialDeadlineDate:"11/30/2023", description:"Practice Regex and Test your skills"},
        { name: "Assignment 2", htmlLink: "https://www.w3schools.com/python/pandas/pandas_quiz.asp",recommendedCompletionDate:"11/09/2023",officialDeadlineDate:"11/30/2023",description:"Review Pandas and take Quiz" },
        { name: "Assignment 3", htmlLink: "https://huggingface.co/learn/nlp-course/chapter1/10?fw=pt",recommendedCompletionDate:"11/16/2023",officialDeadlineDate:"11/30/2023",description:"Learn about NLP on HuggingFace and take Quiz" },
        { name: "Assignment 4", htmlLink: "https://www.w3schools.com/gen_ai/chatgpt-3-5/chatgpt-3-5_code_website.php",recommendedCompletionDate:"11/30/2023",officialDeadlineDate:"11/30/2023",description:"Create website for professor with ChatGPT" }
    ];

    // Display assignment schedule list with dropdown buttons
    const assignmentList = document.getElementById("assignment-list");
    assignments.forEach(assignment => {
        const li = document.createElement("li");
        const details = document.createElement("details");
        const summary = document.createElement("summary");
        const content = document.createElement("div");

        summary.textContent = assignment.name;
        content.innerHTML = `
            <p><strong>HTML Link:</strong> <a href="${assignment.htmlLink}" target="_blank" class="small-text">${assignment.htmlLink}</a></p>
            <p><strong>Recommended Completion Date:</strong> <span class="small-text">${assignment.recommendedCompletionDate}</span></p>
            <p><strong>Official Deadline Date:</strong> <span class="small-text">${assignment.officialDeadlineDate}</span></p>
            <p><strong>Description:</strong> <span class="small-text">${assignment.description}</span></p>
        `;

        details.appendChild(summary);
        details.appendChild(content);
        li.appendChild(details);
        assignmentList.appendChild(li);
        summary.addEventListener("click", () => {
            // Close the previous details element if one is open
            if (openDetails) {
                openDetails.removeAttribute("open");
            }

            // If the clicked summary is not open, set it as the open details
            if (!details.hasAttribute("open")) {
                openDetails = details;
            } else {
                openDetails = null;
            }
        });
    });


    const lectures = [
        { name: "Lecture 1", topic: "The NLP Classic", summary: "overview of NLP in business analytics; review of data processing in python; classic text mining techniques, such as regular expressions, text normalization, edit distance, N grams", lab: "Lab: Set up Google Colab; Set up ChatGPT; Data mining on Twitter" },
        { name: "Lecture 2", topic: "Predictive Analytics in NLP", summary: "Review of basic machine learning techniques; Techniques to build feature sets using classic NLP techniques", lab:"Lab: What makes a tweet retweeted?" },
        { name: "Lecture 3", topic: "The Modern Era", summary: "Vector Semantics and embedding, modern NLP tasks, topic modeling, sentiment analysis", lab:"Lab: Are the tweeters happy?" },
        { name: "Lecture 4", topic: "LLMs", summary: "Overview of generative AI and its applications", lab: "Lab:build your own chatbot" },
        { name: "Lecture 5", topic: "Final Exam", summary: "Review and take final exam", lab: "Lab:No lab for this lecture" }
    ];
    
    // Display lecture list with names, topics, summaries, and labs as dropdowns
    let openDetails = null; // Keep track of the currently open details element

    // Display lecture list with names, topics, summaries, and labs as dropdowns
    const lectureList = document.getElementById("lecture-list");
    lectures.forEach(lecture => {
        const li = document.createElement("li");
        const details = document.createElement("details");
        const summary = document.createElement("summary");
        const content = document.createElement("div");

        summary.textContent = lecture.name;
        content.innerHTML = `<strong>${lecture.topic}</strong>: ${lecture.summary}<br>${lecture.lab}`;

        details.appendChild(summary);
        details.appendChild(content);
        li.appendChild(details);
        lectureList.appendChild(li);

        // Add an event listener to each summary element
        summary.addEventListener("click", () => {
            // Close the previous details element if one is open
            if (openDetails) {
                openDetails.removeAttribute("open");
            }

            // If the clicked summary is not open, set it as the open details
            if (!details.hasAttribute("open")) {
                openDetails = details;
            } else {
                openDetails = null;
            }
        });
    });
    

    // Sample learning objectives
    const objectives = [
        "Landscape of NLP in business analytics",
        "Principles and practices of NLP algorithms in business solution development",
        "Statistical methodologies to assess NLP figure of merit"
    ];

    // Display learning objectives
    const objectiveList = document.getElementById("objective-list");
    objectives.forEach(objective => {
        const li = document.createElement("li");
        li.textContent = objective;
        objectiveList.appendChild(li);
    });
});
