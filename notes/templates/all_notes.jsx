import React, { useState, useEffect } from 'react';
import { Table } from '@/components/ui/table';

const NotesTable = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    // Fetch notes data here
    // setNotes(fetchedNotes);
  }, []);

  const handleAssignStatus = (id) => {
    // Implement assign status logic
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      // Implement delete logic
    }
  };

  return (
    <div className="content">
      <h2 className="text-2xl font-bold text-red-600 mb-4">View All Notes</h2>
      <div className="block">
        <div className="block-content">
          <Table>
            <Table.Header>
              <Table.Row>
                <Table.Head className="text-center">S.No</Table.Head>
                <Table.Head>Uploaded By</Table.Head>
                <Table.Head>Uploading Date</Table.Head>
                <Table.Head>Branch</Table.Head>
                <Table.Head>Subject</Table.Head>
                <Table.Head>Download Notes</Table.Head>
                <Table.Head>File Type</Table.Head>
                <Table.Head>Description</Table.Head>
                <Table.Head>Status</Table.Head>
                <Table.Head>Assign Status</Table.Head>
                <Table.Head>Action</Table.Head>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {notes.map((note, index) => (
                <Table.Row key={note.id}>
                  <Table.Cell className="text-center">{index + 1}</Table.Cell>
                  <Table.Cell>{note.user.username}</Table.Cell>
                  <Table.Cell>{note.uploadingdate}</Table.Cell>
                  <Table.Cell>{note.branch}</Table.Cell>
                  <Table.Cell>{note.subject}</Table.Cell>
                  <Table.Cell>
                    <a href={note.notesfile.url} className="btn btn-success" download>
                      Download
                    </a>
                  </Table.Cell>
                  <Table.Cell>{note.filetype}</Table.Cell>
                  <Table.Cell>{note.description}</Table.Cell>
                  <Table.Cell>{note.status}</Table.Cell>
                  <Table.Cell>
                    <button
                      onClick={() => handleAssignStatus(note.id)}
                      className="btn btn-success"
                    >
                      Assign Status
                    </button>
                  </Table.Cell>
                  <Table.Cell>
                    <button
                      onClick={() => handleDelete(note.id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default NotesTable;