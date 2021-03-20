import React from 'react';

type NotificationState = {
  count: number;
}

export default class extends React.Component<{},NotificationState> {
  constructor(props: any) {
    super(props);
    this.setState({
      count: 1
    })
  }

  render() {
    return (
      <section className="mt-3 mb-2">
        <div className="notifications">
          {this.state.count != -1 ? this.state.count: "Loading"}
        </div>
      </section>
    )
  }
}