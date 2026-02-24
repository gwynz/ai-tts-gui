import { useState } from 'react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

interface Story {
  id: string
  name: string
  vi_name: string
  playlist_id: string | null
  translate_from: 'cn' | 'vn'
  source: string
  current_chapter: number
  current_chapter_page: number
  is_ended_chapter: boolean
  is_done: boolean
  created_at: string
  updated_at: string
}

const mockStories: Story[] = [
  {
    id: 'STR-001',
    name: 'pham-nhan-tu-tien',
    vi_name: 'Phàm Nhân Tu Tiên',
    playlist_id: 'PL1abc123',
    translate_from: 'cn',
    source: 'truyenfull',
    current_chapter: 120,
    current_chapter_page: 3,
    is_ended_chapter: false,
    is_done: false,
    created_at: '2024-01-01',
    updated_at: '2024-01-15',
  },
  {
    id: 'STR-002',
    name: 'toan-chuc-phap-su',
    vi_name: 'Toàn Chức Pháp Sư',
    playlist_id: 'PL2def456',
    translate_from: 'cn',
    source: 'metruyenchu',
    current_chapter: 85,
    current_chapter_page: 1,
    is_ended_chapter: true,
    is_done: true,
    created_at: '2024-01-02',
    updated_at: '2024-01-16',
  },
  {
    id: 'STR-003',
    name: 'dau-pha-thuong-khung',
    vi_name: 'Đấu Phá Thương Khung',
    playlist_id: null,
    translate_from: 'cn',
    source: 'truyenfull',
    current_chapter: 200,
    current_chapter_page: 2,
    is_ended_chapter: false,
    is_done: false,
    created_at: '2024-01-03',
    updated_at: '2024-01-17',
  },
  {
    id: 'STR-004',
    name: 'than-chieu-di-the',
    vi_name: 'Thần Chiêu Dị Thế',
    playlist_id: null,
    translate_from: 'vn',
    source: 'sstruyen',
    current_chapter: 45,
    current_chapter_page: 1,
    is_ended_chapter: false,
    is_done: false,
    created_at: '2024-01-04',
    updated_at: '2024-01-18',
  },
  {
    id: 'STR-005',
    name: 'vo-luyen-dinh-phong',
    vi_name: 'Võ Luyện Đỉnh Phong',
    playlist_id: 'PL5ghi789',
    translate_from: 'cn',
    source: 'truyenfull',
    current_chapter: 310,
    current_chapter_page: 4,
    is_ended_chapter: true,
    is_done: true,
    created_at: '2024-01-05',
    updated_at: '2024-01-19',
  },
  {
    id: 'STR-006',
    name: 'tien-nghich',
    vi_name: 'Tiên Nghịch',
    playlist_id: null,
    translate_from: 'vn',
    source: 'metruyenchu',
    current_chapter: 67,
    current_chapter_page: 2,
    is_ended_chapter: false,
    is_done: false,
    created_at: '2024-01-06',
    updated_at: '2024-01-20',
  },
  {
    id: 'STR-007',
    name: 'bat-diet-than-de',
    vi_name: 'Bất Diệt Thần Đế',
    playlist_id: 'PL7jkl012',
    translate_from: 'cn',
    source: 'truyenfull',
    current_chapter: 155,
    current_chapter_page: 1,
    is_ended_chapter: false,
    is_done: false,
    created_at: '2024-01-07',
    updated_at: '2024-01-21',
  },
  {
    id: 'STR-008',
    name: 'linh-vu-thien-ha',
    vi_name: 'Linh Vũ Thiên Hạ',
    playlist_id: 'PL8mno345',
    translate_from: 'cn',
    source: 'sstruyen',
    current_chapter: 92,
    current_chapter_page: 3,
    is_ended_chapter: true,
    is_done: true,
    created_at: '2024-01-08',
    updated_at: '2024-01-22',
  },
  {
    id: 'STR-009',
    name: 'de-bich-than-hoang',
    vi_name: 'Đế Bích Thần Hoàng',
    playlist_id: null,
    translate_from: 'vn',
    source: 'metruyenchu',
    current_chapter: 18,
    current_chapter_page: 1,
    is_ended_chapter: false,
    is_done: false,
    created_at: '2024-01-09',
    updated_at: '2024-01-23',
  },
  {
    id: 'STR-010',
    name: 'huyen-huyen-truyen',
    vi_name: 'Huyền Huyễn Truyện',
    playlist_id: null,
    translate_from: 'cn',
    source: 'truyenfull',
    current_chapter: 430,
    current_chapter_page: 2,
    is_ended_chapter: false,
    is_done: false,
    created_at: '2024-01-10',
    updated_at: '2024-01-24',
  },
  {
    id: 'STR-011',
    name: 'co-than-ky',
    vi_name: 'Cô Thần Ký',
    playlist_id: null,
    translate_from: 'vn',
    source: 'sstruyen',
    current_chapter: 77,
    current_chapter_page: 1,
    is_ended_chapter: false,
    is_done: false,
    created_at: '2024-01-11',
    updated_at: '2024-01-25',
  },
  {
    id: 'STR-012',
    name: 'than-dao-dan-ton',
    vi_name: 'Thần Đạo Đan Tôn',
    playlist_id: 'PL12pqr678',
    translate_from: 'cn',
    source: 'metruyenchu',
    current_chapter: 260,
    current_chapter_page: 2,
    is_ended_chapter: true,
    is_done: true,
    created_at: '2024-01-12',
    updated_at: '2024-01-26',
  },
  {
    id: 'STR-013',
    name: 'uc-the-than-hoang',
    vi_name: 'Ức Thế Thần Hoàng',
    playlist_id: null,
    translate_from: 'cn',
    source: 'truyenfull',
    current_chapter: 33,
    current_chapter_page: 1,
    is_ended_chapter: false,
    is_done: false,
    created_at: '2024-01-13',
    updated_at: '2024-01-27',
  },
  {
    id: 'STR-014',
    name: 'ma-hoang-chi-ky',
    vi_name: 'Ma Hoàng Chi Ký',
    playlist_id: null,
    translate_from: 'vn',
    source: 'sstruyen',
    current_chapter: 109,
    current_chapter_page: 3,
    is_ended_chapter: false,
    is_done: false,
    created_at: '2024-01-14',
    updated_at: '2024-01-28',
  },
  {
    id: 'STR-015',
    name: 'van-co-than-de',
    vi_name: 'Vạn Cổ Thần Đế',
    playlist_id: 'PL15stu901',
    translate_from: 'cn',
    source: 'metruyenchu',
    current_chapter: 512,
    current_chapter_page: 1,
    is_ended_chapter: true,
    is_done: true,
    created_at: '2024-01-15',
    updated_at: '2024-01-29',
  },
  {
    id: 'STR-016',
    name: 'tu-la-vo-dao',
    vi_name: 'Tu La Võ Đạo',
    playlist_id: null,
    translate_from: 'vn',
    source: 'truyenfull',
    current_chapter: 58,
    current_chapter_page: 2,
    is_ended_chapter: false,
    is_done: false,
    created_at: '2024-01-16',
    updated_at: '2024-01-30',
  },
]

const ITEMS_PER_PAGE = 12

function InfoRow({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-2 text-xs">
      <span className="text-muted-foreground shrink-0">{label}</span>
      <span className="text-foreground truncate text-end">{value}</span>
    </div>
  )
}

export function StoryList() {
  const [page, setPage] = useState(1)

  const totalPages = Math.ceil(mockStories.length / ITEMS_PER_PAGE)
  const visibleStories = mockStories.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  )

  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-4 gap-4">
        {visibleStories.map(story => (
          <Card key={story.id}>
            <CardHeader>
              <CardTitle className="text-base leading-snug">
                {story.vi_name}
              </CardTitle>
              <CardDescription className="truncate">
                {story.name}
              </CardDescription>
            </CardHeader>

            <CardContent className="flex flex-col gap-1.5">
              <InfoRow
                label="ID"
                value={<code className="font-mono">{story.id}</code>}
              />
              <InfoRow
                label="Playlist"
                value={
                  story.playlist_id ? (
                    <code className="font-mono">{story.playlist_id}</code>
                  ) : (
                    <span className="text-muted-foreground italic">—</span>
                  )
                }
              />
              <InfoRow
                label="Source"
                value={<Badge variant="secondary">{story.source}</Badge>}
              />
              <InfoRow
                label="Translate"
                value={
                  <Badge variant={'secondary'}>
                    {story.translate_from.toLowerCase()}
                  </Badge>
                }
              />
              <InfoRow label="Chapter" value={`${story.current_chapter}`} />
              <InfoRow label="Created" value={story.created_at} />
            </CardContent>

            <CardFooter className="flex flex-wrap gap-1.5">
              <Badge className={story.is_done ? 'bg-green-500 text-white border-transparent' : 'bg-yellow-500 text-white border-transparent'}>
                {story.is_done ? 'Done' : 'In Progress'}
              </Badge>
              {story.is_ended_chapter && (
                <Badge variant="secondary">Ended</Badge>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="flex items-center justify-center gap-4">
        <Button
          variant="outline"
          onClick={() => setPage(p => p - 1)}
          disabled={page === 1}
        >
          Previous
        </Button>
        <span className="text-sm text-muted-foreground">
          Page {page} of {totalPages}
        </span>
        <Button
          variant="outline"
          onClick={() => setPage(p => p + 1)}
          disabled={page === totalPages}
        >
          Next
        </Button>
      </div>
    </div>
  )
}
