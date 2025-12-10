import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const sidebars: SidebarsConfig = {
  textbookSidebar: [
    {
      type: 'doc',
      id: 'introduction/overview',
      label: '📚 Textbook Introduction'
    },
    {
      type: 'doc',
      id: 'introduction/history',
      label: 'History'
    },
    {
      type: 'category',
      label: 'Module 1: Foundations of Physical AI',
      link: {type: 'doc', id: 'module-1-physical-ai/chapter-1-sensors'},
      items: [
        'module-1-physical-ai/chapter-1-sensors',
        'module-1-physical-ai/chapter-2-actuators',
        'module-1-physical-ai/chapter-3-control-systems'
      ]
    },
    {
      type: 'category',
      label: 'Module 2: Humanoid Robotics Principles',
      link: {type: 'doc', id: 'module-2-humanoid-robotics/chapter-1-kinematics'},
      items: [
        'module-2-humanoid-robotics/chapter-1-kinematics',
        'module-2-humanoid-robotics/chapter-2-dynamics',
        'module-2-humanoid-robotics/chapter-3-balance-control'
      ]
    },
    {
      type: 'category',
      label: 'Module 3: AI Integration',
      link: {type: 'doc', id: 'module-3-ai-integration/chapter-1-perception'},
      items: [
        'module-3-ai-integration/chapter-1-perception',
        'module-3-ai-integration/chapter-2-learning',
        'module-3-ai-integration/chapter-3-decision-making'
      ]
    },
    {
      type: 'category',
      label: 'Appendix',
      link: {type: 'doc', id: 'appendix/references'},
      items: [
        'appendix/references',
        'appendix/glossary'
      ]
    },
  ],
};

export default sidebars;