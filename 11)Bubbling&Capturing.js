// In the JavaScript, Event Flow process is completed by three concepts :
// 1 Event Capturing.
// 2 Event Target.
// 3 Event Bubbling.

// Top to Bottom(Event Capturing) and other one is Bottom to Top (Event Bubbling). -- side note

// Event capturing

// When you use event capturing

//                | |
// ---------------| |-----------------
// | element1     | |                |
// |   -----------| |-----------     |
// |   |element2  \ /          |     |
// |   -------------------------     |
// |        Event CAPTURING          |
// -----------------------------------
// the event handler of element1 fires first, the event handler of element2 fires last.

// Event bubbling

// When you use event bubbling

//                / \
// ---------------| |-----------------
// | element1     | |                |
// |   -----------| |-----------     |
// |   |element2  | |          |     |
// |   -------------------------     |
// |        Event BUBBLING           |
// -----------------------------------
// the event handler of element2 fires first, the event handler of element1 fires last.
