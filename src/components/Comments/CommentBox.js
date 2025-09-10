import React, { useState, useEffect } from "react";
import { CommentWrapper, CommentForm, CommentList } from "./CommentElements";
import { db } from "../../firebase"; 
import { collection, addDoc, getDocs, serverTimestamp, query, orderBy } from "firebase/firestore";

function CommentBox() {
  const [comments, setComments] = useState([]);
  const [input, setInput] = useState("");

  // 🔹 Fetch comments on mount
  useEffect(() => {
    const fetchComments = async () => {
      const q = query(collection(db, "comments"), orderBy("createdAt", "desc"));
      const querySnapshot = await getDocs(q);
      setComments(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    fetchComments();
  }, []);

  // 🔹 Submit comment
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    await addDoc(collection(db, "comments"), {
      text: input,
      createdAt: serverTimestamp(),
    });

    setInput("");
    // re-fetch after submit
    const q = query(collection(db, "comments"), orderBy("createdAt", "desc"));
    const querySnapshot = await getDocs(q);
    setComments(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
  };

  return (
    <CommentWrapper id="comments">
      <div className="Container">
        <div className="SectionTitle">Drop a Comment / Suggestions</div>

        <CommentForm onSubmit={handleSubmit}>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Write your comment or suggestion..."
          />
          <button type="submit" className="btn PrimaryBtn btn-shadow">
            Submit
          </button>
        </CommentForm>

        <CommentList>
          {comments.length === 0 && <p>No comments yet. Be the first!</p>}
          {comments.map((c) => (
            <div key={c.id} className="comment">
              <p>{c.text}</p>
              {c.createdAt && (
                <span>{new Date(c.createdAt.seconds * 1000).toLocaleString()}</span>
              )}
            </div>
          ))}
        </CommentList>
      </div>
    </CommentWrapper>
  );
}

export default CommentBox;
