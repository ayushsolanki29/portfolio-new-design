"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function MessagesTable({ messages }) {
  const [selectedMessage, setSelectedMessage] = useState(null);

  if (!messages || messages.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-neutral-400 mb-2">No messages found</div>
        <p className="text-sm text-neutral-500">When someone contacts you, their message will appear here.</p>
      </div>
    );
  }

  return (
    <>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-neutral-500">
          <thead className="text-xs text-neutral-700 uppercase bg-neutral-50">
            <tr>
              <th scope="col" className="px-6 py-3 rounded-tl-lg font-medium">Date</th>
              <th scope="col" className="px-6 py-3 font-medium">Name</th>
              <th scope="col" className="px-6 py-3 font-medium">Email</th>
              <th scope="col" className="px-6 py-3 font-medium">Message Snapshot</th>
              <th scope="col" className="px-6 py-3 rounded-tr-lg font-medium text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((msg) => (
              <tr key={msg.id} className="bg-white border-b hover:bg-neutral-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap text-xs text-neutral-400">
                  {new Date(msg.created_at).toLocaleDateString(undefined, {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </td>
                <td className="px-6 py-4 font-medium text-neutral-900 whitespace-nowrap">
                  {msg.name}
                </td>
                <td className="px-6 py-4 text-neutral-600">
                  <a href={`mailto:${msg.email}`} className="hover:text-neutral-900 transition-colors">
                    {msg.email}
                  </a>
                </td>
                <td className="px-6 py-4 text-neutral-700 max-w-[200px] truncate">
                  {msg.message}
                </td>
                <td className="px-6 py-4 text-right">
                  <Button variant="outline" size="sm" onClick={() => setSelectedMessage(msg)}>
                    View Full
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Dialog open={!!selectedMessage} onOpenChange={(open) => !open && setSelectedMessage(null)}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Message from {selectedMessage?.name}</DialogTitle>
            <DialogDescription>
              Received on {selectedMessage && new Date(selectedMessage.created_at).toLocaleString()}
            </DialogDescription>
          </DialogHeader>
          
          <div className="mt-2 space-y-4">
            <div>
              <div className="text-sm font-semibold text-neutral-900">Email</div>
              <a href={`mailto:${selectedMessage?.email}`} className="text-sm text-blue-600 hover:underline">
                {selectedMessage?.email}
              </a>
            </div>
            <div>
              <div className="text-sm font-semibold text-neutral-900 mb-2">Message Content</div>
              <div className="text-sm text-neutral-700 whitespace-pre-wrap bg-neutral-50 p-4 rounded-xl border border-neutral-100 max-h-[50vh] overflow-y-auto leading-relaxed shadow-inner">
                {selectedMessage?.message}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
