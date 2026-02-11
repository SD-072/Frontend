## Summary of Key Commands

1. **Element Selection**:
   - `getElementById()` - Returns single element or null
   - `getElementsByClassName()` - Returns live HTMLCollection
   - `getElementsByTagName()` - Returns live HTMLCollection
   - `querySelector()` - Returns first match or null
   - `querySelectorAll()` - Returns static NodeList

2. **Creating & Modifying Elements**:
   - `createElement()` - Create new element
   - `textContent` - Set/get raw text (safe from XSS)
   - `innerText` - Set/get visible text; aware of styling/layout.
   - `innerHTML` - Set/get HTML (powerful but security risk)
   - `setAttribute()` – Set any attribute (e.g., `src`, `href`); overwrites existing values.
   - `classList` – Manage `class` via `.add()`, `.remove()`, or `.toggle()`.

3. **Inserting Into the DOM**:
   - `appendChild()` - Insert a node as the last child of a parent element.
   - `prepend()` - Insert one or more nodes/text as the first child of a parent element.

4. **Event Handling**:
   - `addEventListener()` - Attach event handlers
   - `event.preventDefault()` - Stop default behavior
   - `event.target` - Element that triggered event
   - Event object contains useful information

5. **Collections**:
   - HTMLCollection - Live, updates automatically
   - NodeList - Static snapshot (when you use querySelectorAll)
   - Neither are arrays, but can be converted

6. **Best Practices**:
   - Always handle potential null elements
   - Use `defer` for script loading
   - Validate form inputs
   - Use descriptive event handler names
   - Prefer `textContent` over `innerHTML` for security
