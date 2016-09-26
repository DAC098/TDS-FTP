var React = require('react');
var {isoDate} = require('../../../lib/misc.js');

var DirContents = React.createClass({
    renderContents: function() {
        return this.props.dir.map((element,index) => {
            return (
                <tr key={index} onClick={() => this.props.request('forward',element.type,element.name)}>
                    <td>{element.name}</td>
                    <td>{element.type}</td>
                    <td>{element.size}</td>
                    <td>{isoDate(element.mtime)}</td>
                </tr>
            );
        });
    },
    render: function() {
        var dir_empty = this.props.dir.length === 0;
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Size(bytes)</th>
                        <th>Modified</th>
                    </tr>
                </thead>
                <tbody>
                    {dir_empty ?
                        null
                        :
                        this.renderContents()
                    }
                </tbody>
            </table>
        )
    }
});

module.exports = DirContents;
