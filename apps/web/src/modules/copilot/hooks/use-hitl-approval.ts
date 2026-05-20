import { useMutation } from '@tanstack/react-query';
import { copilotApi } from '../api/client';

export function useHitlApproval() {
  const approve = useMutation({ mutationFn: (callId: string) => copilotApi.approveHitl(callId) });
  const reject = useMutation({
    mutationFn: (args: { callId: string; note?: string }) =>
      copilotApi.rejectHitl(args.callId, args.note),
  });
  return { approve, reject };
}
