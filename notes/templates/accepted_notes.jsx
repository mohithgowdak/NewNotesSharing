import React, { useState, useEffect } from 'react';
import { Table } from '@/components/ui/table';
import { Button } from '@/components/ui/button';

const OnlineNotesSharing = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    // Fetch notes data from an API
    const fetchNotes = async () => {
      // Replace with actual API call
      const response = await fetch('/api/notes');
      const data = await response.json();
      setNotes(data);
    };

    fetchNotes();
  }, []);

  const handleDownload = (url) => {
    // Implement download logic
    console.log(`Downloading file from ${url}`);
  };

  const handleAssignStatus = (id) => {
    // Implement assign status logic
    console.log(`Assigning status for note ${id}`);
  };

  const handleDelete = (id) => {
    // Implement delete logic
    if (window.confirm('Are you sure you want to delete?')) {
      console.log(`Deleting note ${id}`);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold text-red-600 mb-4">View Accepted Notes</h2>
      
      <div className="overflow-x-auto">
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
                  <Button onClick={() => handleDownload(note.notesfile.url)}>
                    Download
                  </Button>
                </Table.Cell>
                <Table.Cell>{note.filetype}</Table.Cell>
                <Table.Cell>{note.description}</Table.Cell>
                <Table.Cell>{note.status}</Table.Cell>
                <Table.Cell>
                  <Button onClick={() => handleAssignStatus(note.id)}>
                    Assign Status
                  </Button>
                </Table.Cell>
                <Table.Cell>
                  <Button variant="destructive" onClick={() => handleDelete(note.id)}>
                    Delete
                  </Button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default OnlineNotesSharing;