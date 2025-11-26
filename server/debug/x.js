const SMOKE_ALERT_MESSAGE = `
Hello,
The smoke level in the room is currently at {smokeVal}%.
Immediate action is required. Please evacuate the area immediately and
move to a safe location.
If you are experiencing breathing difficulties, seek medical attentionimmediately.
This is an automated alert message, please do not reply to this email.
`;

console.log(SMOKE_ALERT_MESSAGE.replace("{smokeVal}", 70));
