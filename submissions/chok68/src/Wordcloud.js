/**
 * class: Wordcloud
 * Provides wordcloud activity component
 */
import React from 'react';
import { render } from 'react-dom';
import WordCloud from 'react-d3-cloud';

const fontSizeMapper = word => Math.log2(word.value) * 5;
const rotate = word => word.value % 360;

class Wordcloud extends React.Component {

  constructor(props) {
    super(props);
    this.state = {data: [
      { text: 'Loading', value: 1000 },
      { text: 'please', value: 200 },
      { text: 'wait', value: 800 },
    ]};
  }

  componentDidMount() {

    const self = this;

    var data = this.props.activities;

    var wf = [];

    var wordMap = {}
    data.forEach(function(row) {
      var words = row['challenge.challenge_name'].split(' ');
      words.forEach(function(word) {
        if (!wordMap[word]) {
          wordMap[word] = 1;
        } else {
          wordMap[word] = wordMap[word] + 1;
        }
      })
    });
    Object.keys(wordMap).forEach(function(k) {
      wf.push({ text: k, value: wordMap[k] });
    });

    self.setState({ data: wf });

  }

  render() {
    return (
      <WordCloud
        width={window.innerWidth}
        data={this.state.data}
        fontSizeMapper={fontSizeMapper}
        rotate={rotate}
      />
    );
  }
}

export default Wordcloud;
