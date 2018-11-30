import React from 'react';

interface IRenderedProps {
  text: string;
  className?: string;
}

export class Rendered extends React.Component<IRenderedProps, any> {
  public render() {
    return (
      <div className="post-content"
        dangerouslySetInnerHTML={{
          __html: this.props.text || '<h1 class="editor_no-content">There doesn\'t seem to be anything here</h1>'
        }} />
    );
  }
}
