import { Meta, StoryObj } from "@storybook/react";
import React from "react";

const meta: Meta = {
  title: "Helper Classes/Classes",
  tags: ["!autodocs"],
};

export default meta;

export const BorderRadius: StoryObj = {
  render: () => (
    <div style={{ padding: "20px", fontFamily: "monospace" }}>
      <h3>Border Radius Helper Classes</h3>
      <p>
        <strong>Description:</strong> Utility classes for applying border radius to elements.
      </p>

      <h4>Naming Convention:</h4>
      <ul>
        <li>
          <code>br-{"{value}-{unit}"}</code> - All corners
        </li>
        <li>
          <code>br-tl-{"{value}-{unit}"}</code> - Top-left corner
        </li>
        <li>
          <code>br-tr-{"{value}-{unit}"}</code> - Top-right corner
        </li>
        <li>
          <code>br-br-{"{value}-{unit}"}</code> - Bottom-right corner
        </li>
        <li>
          <code>br-bl-{"{value}-{unit}"}</code> - Bottom-left corner
        </li>
      </ul>

      <h4>Units & Ranges:</h4>
      <ul>
        <li>
          <strong>px:</strong> 2px to 64px (increments of 2px)
        </li>
        <li>
          <strong>rem:</strong> 0.25rem to 8rem (increments of 0.25rem)
        </li>
        <li>
          <strong>percent:</strong> 1% to 100% (increments of 1%)
        </li>
      </ul>

      <h4>Usage:</h4>
      <p>
        Apply rounded corners to elements: <code>br-8-px</code>, <code>br-2-rem</code>, <code>br-50-percent</code>
      </p>
    </div>
  ),
};

export const Flex: StoryObj = {
  render: () => (
    <div style={{ padding: "20px", fontFamily: "monospace" }}>
      <h3>Flexbox Helper Classes</h3>
      <p>
        <strong>Description:</strong> Comprehensive flexbox utility classes for layout control.
      </p>

      <h4>Display Classes:</h4>
      <ul>
        <li>
          <code>flex</code> - display: flex
        </li>
        <li>
          <code>flex-inline</code> - display: inline-flex
        </li>
      </ul>

      <h4>Direction Classes:</h4>
      <ul>
        <li>
          <code>flex-row</code> - flex-direction: row
        </li>
        <li>
          <code>flex-row-reverse</code> - flex-direction: row-reverse
        </li>
        <li>
          <code>flex-column</code> - flex-direction: column
        </li>
        <li>
          <code>flex-column-reverse</code> - flex-direction: column-reverse
        </li>
      </ul>

      <h4>Justify Content:</h4>
      <ul>
        <li>
          <code>justify-start</code>, <code>justify-end</code>, <code>justify-center</code>
        </li>
        <li>
          <code>justify-between</code>, <code>justify-around</code>, <code>justify-evenly</code>
        </li>
      </ul>

      <h4>Align Items:</h4>
      <ul>
        <li>
          <code>items-start</code>, <code>items-end</code>, <code>items-center</code>
        </li>
        <li>
          <code>items-baseline</code>, <code>items-stretch</code>
        </li>
      </ul>

      <h4>Align Content:</h4>
      <ul>
        <li>
          <code>content-start</code>, <code>content-end</code>, <code>content-center</code>
        </li>
        <li>
          <code>content-between</code>, <code>content-around</code>, <code>content-evenly</code>
        </li>
      </ul>

      <h4>Flex Wrap:</h4>
      <ul>
        <li>
          <code>flex-wrap</code>, <code>flex-wrap-reverse</code>, <code>flex-nowrap</code>
        </li>
      </ul>

      <h4>Flex Values:</h4>
      <ul>
        <li>
          <code>flex-1</code> to <code>flex-12</code> - flex values from 1 to 12
        </li>
      </ul>

      <h4>Gap Classes:</h4>
      <ul>
        <li>
          <code>g-{"{value}-{unit}"}</code> - gap between flex items
        </li>
        <li>
          <strong>Units:</strong> px (1-64px) and rem (0.25-8rem)
        </li>
      </ul>
    </div>
  ),
};

export const Margin: StoryObj = {
  render: () => (
    <div style={{ padding: "20px", fontFamily: "monospace" }}>
      <h3>Margin Helper Classes</h3>
      <p>
        <strong>Description:</strong> Utility classes for controlling external spacing around elements.
      </p>

      <h4>Naming Convention:</h4>
      <ul>
        <li>
          <code>m-{"{value}-{unit}"}</code> - All sides
        </li>
        <li>
          <code>mt-{"{value}-{unit}"}</code> - Top margin
        </li>
        <li>
          <code>mb-{"{value}-{unit}"}</code> - Bottom margin
        </li>
        <li>
          <code>ml-{"{value}-{unit}"}</code> - Left margin
        </li>
        <li>
          <code>mr-{"{value}-{unit}"}</code> - Right margin
        </li>
        <li>
          <code>mh-{"{value}-{unit}"}</code> - Horizontal margins (left & right)
        </li>
        <li>
          <code>mv-{"{value}-{unit}"}</code> - Vertical margins (top & bottom)
        </li>
      </ul>

      <h4>Auto Margins:</h4>
      <ul>
        <li>
          <code>m-auto</code> - margin: auto
        </li>
        <li>
          <code>mt-auto</code>, <code>mb-auto</code>, <code>ml-auto</code>, <code>mr-auto</code>
        </li>
        <li>
          <code>mh-auto</code> - horizontal auto margins
        </li>
        <li>
          <code>mv-auto</code> - vertical auto margins
        </li>
      </ul>

      <h4>Units & Ranges:</h4>
      <ul>
        <li>
          <strong>px:</strong> 1px to 64px (increments of 1px)
        </li>
        <li>
          <strong>rem:</strong> 0.25rem to 8rem (increments of 0.25rem)
        </li>
      </ul>

      <h4>Usage Examples:</h4>
      <p>
        <code>m-16-px</code>, <code>mt-4-rem</code>, <code>mh-auto</code>, <code>mv-8-px</code>
      </p>
    </div>
  ),
};

export const Padding: StoryObj = {
  render: () => (
    <div style={{ padding: "20px", fontFamily: "monospace" }}>
      <h3>Padding Helper Classes</h3>
      <p>
        <strong>Description:</strong> Utility classes for controlling internal spacing within elements.
      </p>

      <h4>Naming Convention:</h4>
      <ul>
        <li>
          <code>p-{"{value}-{unit}"}</code> - All sides
        </li>
        <li>
          <code>pt-{"{value}-{unit}"}</code> - Top padding
        </li>
        <li>
          <code>pb-{"{value}-{unit}"}</code> - Bottom padding
        </li>
        <li>
          <code>pl-{"{value}-{unit}"}</code> - Left padding
        </li>
        <li>
          <code>pr-{"{value}-{unit}"}</code> - Right padding
        </li>
        <li>
          <code>ph-{"{value}-{unit}"}</code> - Horizontal padding (left & right)
        </li>
        <li>
          <code>pv-{"{value}-{unit}"}</code> - Vertical padding (top & bottom)
        </li>
      </ul>

      <h4>Units & Ranges:</h4>
      <ul>
        <li>
          <strong>px:</strong> 1px to 64px (increments of 1px)
        </li>
        <li>
          <strong>rem:</strong> 0.25rem to 8rem (increments of 0.25rem)
        </li>
      </ul>

      <h4>Usage Examples:</h4>
      <p>
        <code>p-16-px</code>, <code>pt-4-rem</code>, <code>ph-8-px</code>, <code>pv-12-px</code>
      </p>
    </div>
  ),
};

export const Size: StoryObj = {
  render: () => (
    <div style={{ padding: "20px", fontFamily: "monospace" }}>
      <h3>Size Helper Classes</h3>
      <p>
        <strong>Description:</strong> Utility classes for controlling element width and height dimensions.
      </p>

      <h4>Width Classes:</h4>
      <ul>
        <li>
          <code>w-{"{value}-{unit}"}</code> - Width
        </li>
        <li>
          <code>w-min-{"{value}-{unit}"}</code> - Min-width
        </li>
        <li>
          <code>w-max-{"{value}-{unit}"}</code> - Max-width
        </li>
      </ul>

      <h4>Height Classes:</h4>
      <ul>
        <li>
          <code>h-{"{value}-{unit}"}</code> - Height
        </li>
        <li>
          <code>h-min-{"{value}-{unit}"}</code> - Min-height
        </li>
        <li>
          <code>h-max-{"{value}-{unit}"}</code> - Max-height
        </li>
      </ul>

      <h4>Units & Ranges:</h4>
      <ul>
        <li>
          <strong>px:</strong> 1px to 768px (increments of 1px)
        </li>
        <li>
          <strong>rem:</strong> 0.25rem to 32rem (increments of 0.25rem)
        </li>
        <li>
          <strong>percent:</strong> 1% to 100% (increments of 1%)
        </li>
      </ul>

      <h4>Usage Examples:</h4>
      <p>
        <code>w-100-px</code>, <code>h-50-percent</code>, <code>w-min-200-px</code>, <code>h-max-20-rem</code>
      </p>
    </div>
  ),
};

export const SimpleHelpers: StoryObj = {
  render: () => (
    <div style={{ padding: "20px", fontFamily: "monospace" }}>
      <h3>Simple Helper Classes</h3>
      <p>
        <strong>Description:</strong> Basic utility classes for common display and text styling needs.
      </p>

      <h4>Display Classes:</h4>
      <ul>
        <li>
          <code>block</code> - display: block
        </li>
        <li>
          <code>inline</code> - display: inline
        </li>
        <li>
          <code>inline-block</code> - display: inline-block
        </li>
      </ul>

      <h4>Text Classes:</h4>
      <ul>
        <li>
          <code>text-center</code> - text-align: center
        </li>
        <li>
          <code>truncate-text</code> - Truncates text with ellipsis (white-space: nowrap, overflow: hidden,
          text-overflow: ellipsis)
        </li>
      </ul>

      <h4>Scrollbar Classes:</h4>
      <ul>
        <li>
          <code>m-scroll</code> - Custom scrollbar styling with 8px width
        </li>
        <li>
          <code>m-scroll slim-scroll</code> - Slim scrollbar variant with 6px width
        </li>
        <li>Uses CSS custom properties for scrollbar theming</li>
      </ul>

      <h4>Usage Examples:</h4>
      <p>
        <code>block</code>, <code>text-center</code>, <code>truncate-text</code>, <code>m-scroll</code>
      </p>
    </div>
  ),
};
