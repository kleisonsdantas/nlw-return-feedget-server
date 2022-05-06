import { prisma } from '../../prisma';
import { FeedbackCreateDate, FeedbackRepository } from './../feedbacks-repository';

export class PrismaFeedbacksRepository  implements FeedbackRepository {
  async create({type, comment, screenshot}: FeedbackCreateDate) {
    await prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot
      }
    })
  }
}