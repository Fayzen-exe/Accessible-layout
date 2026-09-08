# Pricing Plans Comparison Component

## Narrow-Screen Treatment & Rationale

On narrow viewports (down to 320px width), standard multi-column HTML tables suffer from severe horizontal clipping, forcing users into tedious two-dimensional scrolling. 

### Treatment
To guarantee zero horizontal scrolling at **320px**, the layout transforms at screens under `640px` from a multi-column grid into a **stacked row-card structure**:

1. **Card Per Feature:** Each row (`<tr>`) converts into an isolated block card.
2. **Feature Header:** The feature title (`<th scope="row">`) spans the top of the card as a clear header.
3. **Key-Value Data Formatting:** Table cells (`<td>`) are laid out vertically using Flexbox, with the plan names prepended using CSS pseudo-elements (`::before`) derived from `data-plan` attributes (e.g., `Starter: 5`, `Pro: 25`, `Enterprise: Unlimited`).

### Reasoning
* **Readability & Context:** Users can evaluate all plans for a single feature within a single focused vertical viewport without losing context of which plan a value belongs to.
* **No Horizontal Scrolling:** Eliminates horizontal scrollbars completely at 320px viewports while retaining native semantic markup.

---

## Accessibility & Keyboard Navigation Implementation

1. **Keyboard Operability Order:**
   * Logical HTML source ordering ensures keyboard focus matches the visual layout flow (`Toggle Control` -> `Starter CTA` -> `Pro CTA` -> `Enterprise CTA`).
   * No `tabindex` hacks are used, ensuring linear tab progression.

2. **Visible Focus Highlights:**
   * All interactive elements (`<input>`, `<a>`, `<button>`) feature a high-contrast focus ring (`outline: 3px solid #005fcc; outline-offset: 3px;`) targeting `:focus-visible` to satisfy WCAG 2.4.7.

3. **Assistive Technology Integration:**
   * **Semantic Table Structure:** Native `<table>`, `<thead>`, `<tbody>`, `<caption>`, `<th scope="col">`, and `<th scope="row">` elements are preserved. Screen readers continue to announce table dimensions, column headers, and row headers correctly, even when visual CSS shifts the display mode on mobile devices.
   * **Highlight Control Clarity:** The toggle relies on a semantic `<input type="checkbox">` control linked to the table using `aria-controls="compare-table"`. Enabling the highlight adds visual background contrast (`#fef08a`) and border changes without hiding identical rows, ensuring the comparison structure remains clear and fully understandable while active.