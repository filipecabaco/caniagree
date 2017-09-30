import { UP_THRESHOLD, DOWN_THRESHOLD } from '../constants/thresholds'

export const getParagraphWarningLevel = (upVotes, downVotes) => {
    const totalVotes = upVotes + downVotes
    const ratio = totalVotes === 0 ? 0 : upVotes / totalVotes
    let level = ''

    if(totalVotes > 0) {
        if (ratio >= UP_THRESHOLD)
            level = 'success'
        else if (ratio <= DOWN_THRESHOLD)
            level = 'danger'
        else
            level = 'warning'
    }

    const controversial = level !== 'success' && level.length > 0

    return {
        totalVotes,
        ratio,
        level,
        controversial
    }
}

export const getControversialParagraphs = (paragraphs) => {
    return paragraphs.filter((p) => getParagraphWarningLevel(p.up_vote, p.down_vote).controversial)
}