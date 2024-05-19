import React, { Suspense } from 'react';
import EditPrompt from '@app/update-prompt/page';

const EditPromptWrapper = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <EditPrompt />
    </Suspense>
  );
};

export default EditPromptWrapper;