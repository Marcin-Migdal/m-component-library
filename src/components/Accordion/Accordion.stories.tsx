import { Meta, StoryObj } from "@storybook/react";
import React from "react";

import Accordion from "./Accordion";
import { AccordionMode } from "./types";

const meta: Meta<typeof Accordion> = {
  title: "Components/Accordion",
  component: Accordion,
  args: {
    expansionMode: "multiple",
  },
  argTypes: {
    variant: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      type: "select" as any,
      options: ["default", "compact"],
      description: "The variant of the accordion.",
    },
    expandAnimation: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      type: "select" as any,
      options: ["smooth", "instant"],
      description: "Defines the animation type when expanding/collapsing sections.",
    },
    selectionMode: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      type: "select" as any,
      options: [AccordionMode.SINGLE, AccordionMode.MULTIPLE, undefined],
      description: "Defines whether selection is allowed and in what mode.",
    },
    expansionMode: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      type: "select" as any,
      options: [AccordionMode.SINGLE, AccordionMode.MULTIPLE, undefined],
      description: "Defines whether expansion is allowed and in what mode.",
    },
    icon: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      type: "select" as any,
      options: ["none", "left", "right"],
      description:
        "Position of the toggle icon within the accordion section. If `expansionMode` and`expanded` props are `undefined` then icon will NOT be displayed, even if icon prop is properly passed.",
    },
    children: {
      control: false,
    },
    className: {
      type: "string",
      description: "Additional CSS class for styling the accordion.",
    },
    style: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      type: "object" as any,
      description: "Inline styles for the accordion.",
    },
    instanceClassName: {
      type: "string",
      description:
        "Additional CSS class for each accordion item. This className will be used in all component and it will create className for each accordion component using `instanceClassName` as prefix",
    },
    expandOnIconClick: {
      type: "boolean",
      description:
        "Changes expand/collapse behavior, if `expandOnIconClick` === `true` then expand/collapse event is called only on toggle icon click.",
    },
  },
};

export default meta;

export const Default: StoryObj<typeof Accordion> = {
  args: {
    icon: "left",
    variant: "default",
    expandAnimation: "smooth",
    selectionMode: undefined,
    expansionMode: undefined,
    children: (
      <>
        <Accordion.Section sectionId="1">
          <Accordion.Toggle>Toggle 1</Accordion.Toggle>
          <Accordion.Content>
            <Accordion.Item>Item 1 | 1</Accordion.Item>
            <Accordion.Item>Item 1 | 2</Accordion.Item>
            <Accordion.Item>Item 1 | 3</Accordion.Item>
          </Accordion.Content>
        </Accordion.Section>
        <Accordion.Section sectionId="2">
          <Accordion.Toggle>Toggle 2</Accordion.Toggle>
          <Accordion.Content>
            <Accordion.Item>Item 2 | 1</Accordion.Item>
            <Accordion.Item>Item 2 | 2</Accordion.Item>
            <Accordion.Item>Item 2 | 3</Accordion.Item>
          </Accordion.Content>
        </Accordion.Section>
        <Accordion.Section sectionId="3">
          <Accordion.Toggle>Toggle 3</Accordion.Toggle>
          <Accordion.Content>
            <Accordion.Item>Item 3 | 1</Accordion.Item>
            <Accordion.Item>Item 3 | 2</Accordion.Item>
            <Accordion.Item>Item 3 | 3</Accordion.Item>
          </Accordion.Content>
        </Accordion.Section>
      </>
    ),
  },
};

// export const SingleSelection: StoryObj<typeof Accordion> = {
//   args: {
//     selectionMode: "single",
//     expansionMode: undefined,
//     children: (
//       <>
//         <Accordion.Section sectionId="1">
//           <Accordion.Toggle>Toggle 1</Accordion.Toggle>
//           <Accordion.Content>
//             <Accordion.Item>Item 1 | 1</Accordion.Item>
//             <Accordion.Item>Item 1 | 2</Accordion.Item>
//             <Accordion.Item>Item 1 | 3</Accordion.Item>
//           </Accordion.Content>
//         </Accordion.Section>
//         <Accordion.Section sectionId="2">
//           <Accordion.Toggle>Toggle 2</Accordion.Toggle>
//           <Accordion.Content>
//             <Accordion.Item>Item 2 | 1</Accordion.Item>
//             <Accordion.Item>Item 2 | 2</Accordion.Item>
//             <Accordion.Item>Item 2 | 3</Accordion.Item>
//           </Accordion.Content>
//         </Accordion.Section>
//         <Accordion.Section sectionId="3">
//           <Accordion.Toggle>Toggle 3</Accordion.Toggle>
//           <Accordion.Content>
//             <Accordion.Item>Item 3 | 1</Accordion.Item>
//             <Accordion.Item>Item 3 | 2</Accordion.Item>
//             <Accordion.Item>Item 3 | 3</Accordion.Item>
//           </Accordion.Content>
//         </Accordion.Section>
//       </>
//     ),
//   },
// };

// export const MultipleSelection: StoryObj<typeof Accordion> = {
//   args: {
//     selectionMode: "multiple",
//     expansionMode: undefined,
//     children: (
//       <>
//         <Accordion.Section sectionId="1">
//           <Accordion.Toggle>Toggle 1</Accordion.Toggle>
//           <Accordion.Content>
//             <Accordion.Item>Item 1 | 1</Accordion.Item>
//             <Accordion.Item>Item 1 | 2</Accordion.Item>
//             <Accordion.Item>Item 1 | 3</Accordion.Item>
//           </Accordion.Content>
//         </Accordion.Section>
//         <Accordion.Section sectionId="2">
//           <Accordion.Toggle>Toggle 2</Accordion.Toggle>
//           <Accordion.Content>
//             <Accordion.Item>Item 2 | 1</Accordion.Item>
//             <Accordion.Item>Item 2 | 2</Accordion.Item>
//             <Accordion.Item>Item 2 | 3</Accordion.Item>
//           </Accordion.Content>
//         </Accordion.Section>
//         <Accordion.Section sectionId="3">
//           <Accordion.Toggle>Toggle 3</Accordion.Toggle>
//           <Accordion.Content>
//             <Accordion.Item>Item 3 | 1</Accordion.Item>
//             <Accordion.Item>Item 3 | 2</Accordion.Item>
//             <Accordion.Item>Item 3 | 3</Accordion.Item>
//           </Accordion.Content>
//         </Accordion.Section>
//       </>
//     ),
//   },
// };

// export const SingleExpand: StoryObj<typeof Accordion> = {
//   args: {
//     expansionMode: "single",
//     children: (
//       <>
//         <Accordion.Section sectionId="1">
//           <Accordion.Toggle>Toggle 1</Accordion.Toggle>
//           <Accordion.Content>
//             <Accordion.Item>Item 1 | 1</Accordion.Item>
//             <Accordion.Item>Item 1 | 2</Accordion.Item>
//             <Accordion.Item>Item 1 | 3</Accordion.Item>
//           </Accordion.Content>
//         </Accordion.Section>
//         <Accordion.Section sectionId="2">
//           <Accordion.Toggle>Toggle 2</Accordion.Toggle>
//           <Accordion.Content>
//             <Accordion.Item>Item 2 | 1</Accordion.Item>
//             <Accordion.Item>Item 2 | 2</Accordion.Item>
//             <Accordion.Item>Item 2 | 3</Accordion.Item>
//           </Accordion.Content>
//         </Accordion.Section>
//         <Accordion.Section sectionId="3">
//           <Accordion.Toggle>Toggle 3</Accordion.Toggle>
//           <Accordion.Content>
//             <Accordion.Item>Item 3 | 1</Accordion.Item>
//             <Accordion.Item>Item 3 | 2</Accordion.Item>
//             <Accordion.Item>Item 3 | 3</Accordion.Item>
//           </Accordion.Content>
//         </Accordion.Section>
//       </>
//     ),
//   },
// };

// export const MultipleExpansions: StoryObj<typeof Accordion> = {
//   args: {
//     children: (
//       <>
//         <Accordion.Section sectionId="1">
//           <Accordion.Toggle>Toggle 1</Accordion.Toggle>
//           <Accordion.Content>
//             <Accordion.Item>Item 1 | 1</Accordion.Item>
//             <Accordion.Item>Item 1 | 2</Accordion.Item>
//             <Accordion.Item>Item 1 | 3</Accordion.Item>
//           </Accordion.Content>
//         </Accordion.Section>
//         <Accordion.Section sectionId="2">
//           <Accordion.Toggle>Toggle 2</Accordion.Toggle>
//           <Accordion.Content>
//             <Accordion.Item>Item 2 | 1</Accordion.Item>
//             <Accordion.Item>Item 2 | 2</Accordion.Item>
//             <Accordion.Item>Item 2 | 3</Accordion.Item>
//           </Accordion.Content>
//         </Accordion.Section>
//         <Accordion.Section sectionId="3">
//           <Accordion.Toggle>Toggle 3</Accordion.Toggle>
//           <Accordion.Content>
//             <Accordion.Item>Item 3 | 1</Accordion.Item>
//             <Accordion.Item>Item 3 | 2</Accordion.Item>
//             <Accordion.Item>Item 3 | 3</Accordion.Item>
//           </Accordion.Content>
//         </Accordion.Section>
//       </>
//     ),
//   },
// };

// export const CompactVariant: StoryObj<typeof Accordion> = {
//   args: {
//     variant: "compact",
//     children: (
//       <>
//         <Accordion.Section sectionId="1">
//           <Accordion.Toggle>Toggle 1</Accordion.Toggle>
//           <Accordion.Content>
//             <Accordion.Item>Item 1 | 1</Accordion.Item>
//             <Accordion.Item>Item 1 | 2</Accordion.Item>
//           </Accordion.Content>
//         </Accordion.Section>
//         <Accordion.Section sectionId="2">
//           <Accordion.Toggle>Toggle 2</Accordion.Toggle>
//           <Accordion.Content>
//             <Accordion.Item>Item 2 | 1</Accordion.Item>
//             <Accordion.Item>Item 2 | 2</Accordion.Item>
//           </Accordion.Content>
//         </Accordion.Section>
//       </>
//     ),
//   },
// };

// export const InstantAnimation: StoryObj<typeof Accordion> = {
//   args: {
//     expandAnimation: "instant",
//     children: (
//       <>
//         <Accordion.Section sectionId="1">
//           <Accordion.Toggle>Toggle 1</Accordion.Toggle>
//           <Accordion.Content>
//             <Accordion.Item>Item 1 | 1</Accordion.Item>
//             <Accordion.Item>Item 1 | 2</Accordion.Item>
//           </Accordion.Content>
//         </Accordion.Section>
//         <Accordion.Section sectionId="2">
//           <Accordion.Toggle>Toggle 2</Accordion.Toggle>
//           <Accordion.Content>
//             <Accordion.Item>Item 2 | 1</Accordion.Item>
//             <Accordion.Item>Item 2 | 2</Accordion.Item>
//           </Accordion.Content>
//         </Accordion.Section>
//       </>
//     ),
//   },
// };

// export const RightIcon: StoryObj<typeof Accordion> = {
//   args: {
//     icon: "right",
//     children: (
//       <>
//         <Accordion.Section sectionId="1">
//           <Accordion.Toggle>Toggle 1</Accordion.Toggle>
//           <Accordion.Content>
//             <Accordion.Item>Item 1 | 1</Accordion.Item>
//             <Accordion.Item>Item 1 | 2</Accordion.Item>
//           </Accordion.Content>
//         </Accordion.Section>
//         <Accordion.Section sectionId="2">
//           <Accordion.Toggle>Toggle 2</Accordion.Toggle>
//           <Accordion.Content>
//             <Accordion.Item>Item 2 | 1</Accordion.Item>
//             <Accordion.Item>Item 2 | 2</Accordion.Item>
//           </Accordion.Content>
//         </Accordion.Section>
//       </>
//     ),
//   },
// };

// export const expandOnIconClick: StoryObj<typeof Accordion> = {
//   args: {
//     expandOnIconClick: true,
//     children: (
//       <>
//         <Accordion.Section sectionId="1">
//           <Accordion.Toggle>Toggle 1</Accordion.Toggle>
//           <Accordion.Content>
//             <Accordion.Item>Item 1 | 1</Accordion.Item>
//             <Accordion.Item>Item 1 | 2</Accordion.Item>
//           </Accordion.Content>
//         </Accordion.Section>
//         <Accordion.Section sectionId="2">
//           <Accordion.Toggle>Toggle 2</Accordion.Toggle>
//           <Accordion.Content>
//             <Accordion.Item>Item 2 | 1</Accordion.Item>
//             <Accordion.Item>Item 2 | 2</Accordion.Item>
//           </Accordion.Content>
//         </Accordion.Section>
//       </>
//     ),
//   },
// };
