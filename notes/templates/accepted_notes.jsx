var MyClass = React.createClass({
    render: function() {
      return (
        <div>
          {'{'}% load static %{'}'}
          {/*<![endif]*/}
          <title>Online Notes Sharing- Accept Notes</title>
          <link rel="stylesheet" href="{% static 'js/plugins/datatables/dataTables.bootstrap4.min.css' %}" />
          <link rel="stylesheet" id="css-main" href="{% static 'css1/codebase.min.css' %}" />
          <div id="page-container" className="sidebar-o sidebar-inverse side-scroll page-header-fixed main-content-narrow">
            {'{'}% include "sidebar.html" %{'}'}
            {'{'}% include "admin_nav.html" %{'}'}
            {/* Main Container */}
            <main id="main-container">
              {/* Page Content */}
              <div className="content">
                <h2 className="content-heading text-danger">View Accepted Notes</h2>
                {/* Dynamic Table Full Pagination */}
                <div className="block">
                  <div className="block-content block-content-full">
                    {/* DataTables init on table by adding .js-dataTable-full-pagination class, functionality initialized in js/pages/be_tables_datatables.js */}
                    {'{'}% for i in notes %{'}'}
                    {'{'}% endfor %{'}'}
                    <table className="table table-bordered table-striped table-vcenter js-dataTable-full-pagination">
                      <thead className="text-white" style={{backgroundColor : '#5d4037'}}>
                        <tr>
                          <th className="text-center">S.No</th>
                          <th className="d-none d-sm-table-cell">Uploaded By</th>
                          <th className="d-none d-sm-table-cell">Uploading Date</th>
                          <th className="d-none d-sm-table-cell">Branch</th>
                          <th className="d-none d-sm-table-cell">Subject</th>
                          <th className="d-none d-sm-table-cell">Download Notes</th>
                          <th className="d-none d-sm-table-cell">File Type</th>
                          <th className="d-none d-sm-table-cell">Description</th>
                          <th className="d-none d-sm-table-cell">Status</th>
                          <th className="d-none d-sm-table-cell">Assign Status</th>
                          <th className="d-none d-sm-table-cell" style={{width: '15%'}}>Action</th>
                        </tr>
                      </thead><tbody>
                        <tr>
                          <td className="text-center">{'{'}{'{'}forloop.counter{'}'}{'}'}</td>
                          <td className="font-w600">{'{'}{'{'}i.user.username{'}'}{'}'}</td>
                          <td className="font-w600">{'{'}{'{'}i.uploadingdate{'}'}{'}'}</td>
                          <td className="font-w600">{'{'}{'{'}i.branch{'}'}{'}'}</td>
                          <td className="font-w600">{'{'}{'{'}i.subject{'}'}{'}'}</td>
                          <td className="font-w600"><a href="{{i.notesfile.url}}" className="btn btn-success" download>Download</a></td>
                          <td className="font-w600">{'{'}{'{'}i.filetype{'}'}{'}'}</td>
                          <td className="font-w600">{'{'}{'{'}i.description{'}'}{'}'}</td>
                          <td className="font-w600">{'{'}{'{'}i.status{'}'}{'}'}</td>
                          <td className="font-w600"><a href="{% url 'assign_status' i.id %}" className="btn btn-success">Assign&nbsp;Status</a></td>
                          <td className="font-w600"><a href="{% url 'delete_notes' i.id %}" className="btn btn-danger" onclick="return confirm('Are your sure to Delete ?')">Delete</a></td>
                        </tr></tbody>
                    </table>
                  </div>
                </div>
                {/* END Dynamic Table Full Pagination */}
                {/* END Dynamic Table Simple */}
              </div>
              {/* END Page Content */}
            </main>
            {/* END Main Container */}
          </div>
          {/* END Page Container */}
          {/* Codebase Core JS */}
          {/* Page JS Plugins */}
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossOrigin="anonymous" />
          {/* Page JS Code */}
        </div>
      );
    }
  });