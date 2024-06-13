const emailApp = {
    user: {
        name: "Lexi Gilley",
        email: "lexigilley@example.com",
        contacts: [
            {
                name: "Shannon Tullly",
                email: "shannontully@example.com"
            },
            {
                name: "Suzanne Lewis",
                email: "suzannelewis@example.com"
            },
        ]
    },
    mailboxes: [
        {
            name: "Inbox",
            emails: [
                {
                    sender: "Lexi Gilley",
                    subject: "Meeting Reminder",
                    body: "Don't forget about the meeting tomorrow!",
                    read: false
                },
                {
                    sender: "Shannon Tully",
                    subject: "Project Update",
                    body: "Here's the latest update on our project.",
                    read: true
                },
            ]
        },
        {
            name: "Sent",
            emails: [
            ]
        },
        {
            name: "Drafts",
            emails: [
            ]
        },
    ],
};

const mailboxNames = emailApp.mailboxes.map(mailbox => mailbox.name);
console.log("Mailbox Names:", mailboxNames);

const allEmails = emailApp.mailboxes.flatMap(mailbox => mailbox.emails);
console.log("All Emails:", allEmails);

if (allEmails.length >= 2) {
    console.log("Text of the Second Email:", allEmails[1].body);
} else {
    console.log("No second email available.");
}

if (emailApp.mailboxes.some(mailbox => mailbox.name === "Drafts")) {
    const draftMailbox = emailApp.mailboxes.find(mailbox => mailbox.name === "Drafts");
    if (draftMailbox.emails.length > 0) {
        const emailToSend = draftMailbox.emails.shift();
        emailApp.mailboxes.find(mailbox => mailbox.name === "Sent").emails.push(emailToSend);
        console.log("Draft email sent successfully.");
    } else {
        console.log("No draft email available to send.");
    }
} else {
    console.log("Drafts mailbox not found.");
}

const newDraftEmail = {
    sender: emailApp.user.email,
    subject: "Meeting Reminder",
    body: "Here's the reminder for our meeting next week.",
    read: false
};
const draftsMailbox = emailApp.mailboxes.find(mailbox => mailbox.name === "Drafts");
if (draftsMailbox) {
    draftsMailbox.emails.push(newDraftEmail);
    console.log("Draft email added successfully.");
} else {
    console.log("Drafts mailbox not found.");
}
