
import React from 'react';
import { TagCloud } from 'react-tagcloud';
import "../Styles/HomeWebDevStyles.scss";

const data = [
  { value: 'Unity', count: 25 },
  { value: 'MongoDB', count: 18 },
  { value: 'JavaScript', count: 38 },
  { value: 'React', count: 30 },
  { value: 'Nodejs', count: 28 },
  { value: 'Express.js', count: 25 },
  { value: 'HTML5', count: 33 },
  { value: 'CSS', count: 20 },
  { value: 'WebGL', count: 22 },
  { value: 'Babel.js', count: 7 },
  { value: 'SASS', count: 25 },
  { value: 'Git', count: 15 },
  { value: 'React Native', count: 27 },
  { value: 'C#/.Net', count: 30 },
  { value: 'MonoBehaviour', count: 15 },
  { value: 'FlexBox', count: 30 },
  { value: 'NPM', count: 11 },
  { value: 'OOP', count: 33 },
  { value: 'SQL', count: 20 },
  { value: 'NetworkBehaviour', count: 30 },
  { value: 'TypeScript', count: 15 },
  { value: 'netCode', count: 30 },
  { value: 'Mirror', count: 11 },
  { value: 'StateMachine', count: 30 },
  { value: 'NPM', count: 11 },
  { value: 'Unit3D', count: 33 },
  { value: 'Web3', count: 28 },
  { value: 'Observer', count: 25 },
  { value: 'Git-Hub', count: 15 },
  { value: 'Jsx', count: 17 },
  { value: 'Python', count: 25 },
  { value: 'Bootstrap', count: 18 },
  { value: 'Scss', count: 38 },
  { value: 'Android', count: 30 },
  { value: 'Sass', count: 27 },
  { value: 'HTML5', count: 33 },
  { value: 'Gcl+', count: 15 },
  { value: 'Delta', count: 30 },
  { value: 'Plc', count: 11 },
  { value: 'VS', count: 33 },
  { value: 'VR', count: 15 },
  { value: 'AR', count: 30 },
]
/* CSS:
@keyframes blinker {
  50% { opacity: 0.0; }
}
*/

// custom renderer is function which has tag, computed font size and
// color as arguments, and returns react component which represents tag
const customRenderer = (tag, size, color) => (
  <span className='wordCloudSpan'
    key={tag.value}
    style={{
      animation: 'blinker 5s linear infinite',
      animationDelay: `${Math.random() * 2}s`,
      fontSize: `${size / 2}em`,
      border: `2px solid ${color}`,
      margin: '3px',
      padding: '3px',
      display: 'inline-block',
      color: 'white',
  
    }}
  >
    {tag.value}
  </span>
)

export default () => (<div className="wordBubble">
  <TagCloud tags={data} minSize={1} maxSize={5} renderer={customRenderer} />
  </div>
)
