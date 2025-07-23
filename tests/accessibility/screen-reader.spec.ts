// Define interfaces for better type safety
// These interfaces are used in the test file for type safety
interface ImageInfo {
  src: string;
  id: string;
  class: string;
}

interface InputInfo {
  tagName: string;
  type: string;
  id: string;
  name: string;
  placeholder: string;
}

interface ElementInfo {
  tagName: string;
  id: string;
  class: string;
  href: string;
  innerHtml: string;
}

interface HeadingInfo {
  level: number;
  text: string;
  id: string;
}

interface AriaIssue {
  element: string;
  attribute: string;
  value: string;
  issue: string;
}

interface LiveRegion {
  value: string;
  id: string;
  class: string;
  content: string;
}
