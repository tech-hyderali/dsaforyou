import { useLocalStorage } from './useLocalStorage';

interface Progress {
  completedTopics: string[];
  completedExercises: string[];
  savedNotes: string[];
  bookmarkedProjects: string[];
}

export function useProgress() {
  const [progress, setProgress] = useLocalStorage<Progress>('user-progress', {
    completedTopics: [],
    completedExercises: [],
    savedNotes: [],
    bookmarkedProjects: [],
  });

  const markTopicComplete = (topicId: string) => {
    setProgress(prev => ({
      ...prev,
      completedTopics: [...prev.completedTopics, topicId],
    }));
  };

  const markExerciseComplete = (exerciseId: string) => {
    setProgress(prev => ({
      ...prev,
      completedExercises: [...prev.completedExercises, exerciseId],
    }));
  };

  const saveNote = (noteId: string) => {
    setProgress(prev => ({
      ...prev,
      savedNotes: [...prev.savedNotes, noteId],
    }));
  };

  const bookmarkProject = (projectId: string) => {
    setProgress(prev => ({
      ...prev,
      bookmarkedProjects: [...prev.bookmarkedProjects, projectId],
    }));
  };

  return {
    progress,
    markTopicComplete,
    markExerciseComplete,
    saveNote,
    bookmarkProject,
  };
}